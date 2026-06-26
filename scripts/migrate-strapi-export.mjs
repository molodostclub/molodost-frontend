/**
 * Strapi → src/content/*.json + public/cms/**
 *
 * Usage:
 *   node scripts/migrate-strapi-export.mjs --backup=../molodost-migration/backup-2026-06-26_06-29-54
 *   node scripts/migrate-strapi-export.mjs
 *   node scripts/migrate-strapi-export.mjs --input=./data/strapi-export
 *
 * --backup: extracted tar.gz folder (database/data.db + uploads/)
 * --input:  folder with houses.json, trips.json, ecosystem.json (REST export)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { copyMediaToCms } from './lib/cms-media.mjs';
import {
	getComponentCover,
	getEcosystemTripSlug,
	getEntityFiles,
	getTripNotes,
	loadEcosystemEntries,
	loadPublishedHouses,
	loadPublishedTrips,
	openStrapiDb,
} from './lib/strapi-sqlite-export.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const CMS_DIR = path.join(ROOT, 'public', 'cms');
const STRAPI_BASE = process.env.STRAPI_URL || 'https://admin.molodost.club';

const backupArg = process.argv.find((a) => a.startsWith('--backup='));
const inputArg = process.argv.find((a) => a.startsWith('--input='));
const BACKUP_DIR = backupArg ? path.resolve(backupArg.split('=')[1]) : null;
const INPUT_DIR = inputArg ? path.resolve(inputArg.split('=')[1]) : null;

function ensureDir(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

function sanitizeFilename(name) {
	return String(name || 'file')
		.replace(/[^a-zA-Z0-9._-]+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.toLowerCase();
}

function resetCmsDir() {
	if (fs.existsSync(CMS_DIR)) {
		fs.rmSync(CMS_DIR, { recursive: true, force: true });
	}
	ensureDir(path.join(CMS_DIR, 'houses'));
	ensureDir(path.join(CMS_DIR, 'trips'));
	ensureDir(path.join(CMS_DIR, 'ecosystem'));
}

function resolveStrapiUrl(url) {
	if (!url) return null;
	if (/^https?:\/\//i.test(url)) {
		try {
			const u = new URL(url);
			return `${STRAPI_BASE}${u.pathname}${u.search}`;
		} catch {
			return url;
		}
	}
	return `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}

async function downloadMedia(relativeDest, strapiUrl) {
	const destPath = path.join(ROOT, 'public', relativeDest.replace(/^\//, ''));
	if (fs.existsSync(destPath)) return relativeDest;

	ensureDir(path.dirname(destPath));
	const fullUrl = resolveStrapiUrl(strapiUrl);
	if (!fullUrl) return null;

	const res = await fetch(fullUrl);
	if (!res.ok) {
		console.warn(`  skip media (${res.status}): ${fullUrl}`);
		return null;
	}

	const buf = Buffer.from(await res.arrayBuffer());
	fs.writeFileSync(destPath, buf);
	return relativeDest;
}

async function mapMediaFromUrls(urls, folder, slugPrefix, usedNames, { uploadsDir = null } = {}) {
	const paths = [];
	for (let i = 0; i < urls.length; i++) {
		const url = typeof urls[i] === 'string' ? urls[i] : urls[i].url;
		const ext = path.extname(url || '') || '.jpg';
		const base = sanitizeFilename(`${slugPrefix}-${i + 1}.webp`);
		let filename = base;
		let n = 1;
		while (usedNames.has(filename)) {
			n += 1;
			filename = sanitizeFilename(`${slugPrefix}-${i + 1}-${n}.webp`);
		}
		usedNames.add(filename);

		const relativeDest = `/cms/${folder}/${filename}`;

		let result = null;
		if (uploadsDir) {
			result = await copyMediaToCms({
				uploadsDir,
				publicRoot: path.join(ROOT, 'public'),
				sourceUrl: url,
				destRelativePath: relativeDest,
			});
		} else {
			result = await downloadMedia(relativeDest, url);
		}

		if (result) paths.push(result);
	}
	return paths;
}

async function transformHouseFromDb(row, db, uploadsDir, usedNames) {
	const slug = row.slug || `house-${row.id}`;
	const pictureUrls = getEntityFiles(db, 'api::house.house', row.id, 'pictures').map((f) => f.url);
	const videoUrls = getEntityFiles(db, 'api::house.house', row.id, 'video').map((f) => f.url);
	const previewUrls = getEntityFiles(db, 'api::house.house', row.id, 'videoPreview').map((f) => f.url);

	const pictures = await mapMediaFromUrls(pictureUrls, 'houses', slug, usedNames, { uploadsDir });
	const videoList = videoUrls.length
		? await mapMediaFromUrls(videoUrls, 'houses', `${slug}-video`, usedNames, { uploadsDir })
		: [];
	const previewList = previewUrls.length
		? await mapMediaFromUrls(previewUrls, 'houses', `${slug}-preview`, usedNames, { uploadsDir })
		: [];

	return {
		id: row.id,
		slug,
		title: row.title || '',
		subtitle: row.subtitle || '',
		description: row.description || '',
		area: row.area ?? 0,
		peopleMin: row.peopleMin ?? 1,
		peopleMax: row.peopleMax ?? 1,
		basePrice: Number(row.basePrice) || 0,
		basePrice2: row.basePrice2 != null ? Number(row.basePrice2) : undefined,
		pictures,
		video: videoList[0] || undefined,
		videoPreview: previewList[0] || undefined,
		isIndividual: Boolean(row.isIndividual),
		isMars: Boolean(row.isMars),
		isBaikal: Boolean(row.isBaikal),
		isLuxiping: Boolean(row.isLuxiping),
	};
}

async function transformTripFromDb(row, db, uploadsDir, usedNames) {
	const slug = row.slug || `trip-${row.id}`;
	const pictureUrls = getEntityFiles(db, 'api::trip.trip', row.id, 'pictures').map((f) => f.url);
	const pictures = await mapMediaFromUrls(pictureUrls, 'trips', slug, usedNames, { uploadsDir });
	const notes = getTripNotes(db, row.id).map((n) => ({ id: n.id, text: n.text || '' }));

	return {
		id: row.id,
		slug,
		title: row.title || '',
		subtitle: row.subtitle || '',
		description: row.description || '',
		pictures,
		priceAdult: Number(row.priceAdult) || 0,
		priceChild: Number(row.priceChild) || 0,
		isAllDay: Boolean(row.isAllDay),
		durationText: row.durationText || null,
		notes,
	};
}

async function transformEcosystemFromDb(db, uploadsDir, tripById, usedNames) {
	const rows = loadEcosystemEntries(db);
	const entries = [];

	for (const row of rows) {
		const coverUrl = getComponentCover(db, row.id);
		const coverPaths = coverUrl
			? await mapMediaFromUrls(
					[coverUrl],
					'ecosystem',
					sanitizeFilename(row.title || `entry-${row.id}`),
					usedNames,
					{ uploadsDir },
				)
			: [];

		const tripSlug = getEcosystemTripSlug(db, row.id) || (tripById.get(row.tripId) ?? null);

		entries.push({
			id: row.id,
			title: row.title || '',
			description: row.description || '',
			cover: coverPaths[0] || null,
			pagePath: row.pagePath || null,
			tripSlug,
		});
	}

	return { entries };
}

async function loadFromBackup(backupDir) {
	const dbPath = path.join(backupDir, 'database', 'data.db');
	const uploadsDir = path.join(backupDir, 'uploads');

	if (!fs.existsSync(dbPath)) {
		throw new Error(`SQLite not found: ${dbPath}`);
	}
	if (!fs.existsSync(uploadsDir)) {
		throw new Error(`uploads/ not found: ${uploadsDir}`);
	}

	console.log(`Reading SQLite: ${dbPath}`);
	console.log(`Uploads: ${uploadsDir}`);

	const db = openStrapiDb(dbPath);
	const usedNames = new Set();

	const houses = [];
	for (const row of loadPublishedHouses(db)) {
		houses.push(await transformHouseFromDb(row, db, uploadsDir, usedNames));
	}

	const trips = [];
	for (const row of loadPublishedTrips(db)) {
		trips.push(await transformTripFromDb(row, db, uploadsDir, usedNames));
	}

	const tripById = new Map(trips.map((t) => [t.id, t.slug]));
	const ecosystem = await transformEcosystemFromDb(db, uploadsDir, tripById, usedNames);
	db.close();

	return { houses, trips, ecosystem };
}

// --- REST fallback (legacy) ---

async function mapMediaList(mediaData, folder, slugPrefix, usedNames) {
	if (!mediaData?.length) return [];
	const urls = mediaData.map((item) => item.attributes?.url || item.url).filter(Boolean);
	return mapMediaFromUrls(urls, folder, slugPrefix, usedNames);
}

async function mapSingleMedia(mediaItem, folder, slugPrefix, usedNames) {
	if (!mediaItem?.data) return null;
	const list = await mapMediaList([mediaItem.data], folder, slugPrefix, usedNames);
	return list[0] || null;
}

async function transformHouse(entry, usedNames) {
	const { id, attributes: a } = entry;
	const slug = a.slug || `house-${id}`;
	const pictures = await mapMediaList(a.pictures?.data, 'houses', slug, usedNames);
	const video = await mapSingleMedia(a.video, 'houses', `${slug}-video`, usedNames);
	const videoPreview = await mapSingleMedia(a.videoPreview, 'houses', `${slug}-preview`, usedNames);

	return {
		id,
		slug,
		title: a.title || '',
		subtitle: a.subtitle || '',
		description: a.description || '',
		area: a.area ?? 0,
		peopleMin: a.peopleMin ?? 1,
		peopleMax: a.peopleMax ?? 1,
		basePrice: Number(a.basePrice) || 0,
		basePrice2: a.basePrice2 != null ? Number(a.basePrice2) : undefined,
		pictures,
		video: video || undefined,
		videoPreview: videoPreview || undefined,
		isIndividual: Boolean(a.isIndividual),
		isMars: Boolean(a.isMars),
		isBaikal: Boolean(a.isBaikal),
		isLuxiping: Boolean(a.isLuxiping),
	};
}

async function transformTrip(entry, usedNames) {
	const { id, attributes: a } = entry;
	const slug = a.slug || `trip-${id}`;
	const pictures = await mapMediaList(a.pictures?.data, 'trips', slug, usedNames);
	const notes = (a.notes || []).map((note, index) => ({
		id: note.id ?? index + 1,
		text: note.text || '',
	}));

	return {
		id,
		slug,
		title: a.title || '',
		subtitle: a.subtitle || '',
		description: a.description || '',
		pictures,
		priceAdult: Number(a.priceAdult) || 0,
		priceChild: Number(a.priceChild) || 0,
		isAllDay: Boolean(a.isAllDay),
		durationText: a.durationText || null,
		notes,
	};
}

async function transformEcosystem(raw, tripById, usedNames) {
	const entries = raw?.attributes?.entries || raw?.entries || [];
	const transformed = [];

	for (const entry of entries) {
		const coverPaths = await mapMediaList(
			entry.cover?.data ? [entry.cover.data] : [],
			'ecosystem',
			sanitizeFilename(entry.title || `entry-${entry.id}`),
			usedNames,
		);

		let tripSlug = null;
		const tripRef = entry.trip?.data;
		if (tripRef?.id && tripById.has(tripRef.id)) {
			tripSlug = tripById.get(tripRef.id);
		} else if (entry.trip?.slug) {
			tripSlug = entry.trip.slug;
		} else if (tripRef?.attributes?.slug) {
			tripSlug = tripRef.attributes.slug;
		}

		transformed.push({
			id: entry.id,
			title: entry.title || '',
			description: entry.description || '',
			cover: coverPaths[0] || null,
			pagePath: entry.pagePath || null,
			tripSlug,
		});
	}

	return { entries: transformed };
}

async function fetchJson(endpoint) {
	const url = `${STRAPI_BASE}/api/${endpoint}`;
	console.log(`Fetching ${url}`);
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return res.json();
}

async function loadRaw(name, endpoint) {
	if (INPUT_DIR) {
		const filePath = path.join(INPUT_DIR, `${name}.json`);
		if (fs.existsSync(filePath)) {
			console.log(`Reading ${filePath}`);
			return JSON.parse(fs.readFileSync(filePath, 'utf8'));
		}
	}
	return fetchJson(endpoint);
}

async function loadFromRest() {
	const usedNames = new Set();
	const housesRaw = await loadRaw(
		'houses',
		'houses?populate[pictures]=*&populate[video]=*&populate[videoPreview]=*&pagination[pageSize]=100',
	);
	const tripsRaw = await loadRaw(
		'trips',
		'trips?populate[pictures]=*&populate[notes]=*&pagination[pageSize]=100',
	);
	const ecosystemRaw = await loadRaw(
		'ecosystem',
		'ecosystem?populate[entries][populate][0]=cover&populate[entries][populate][1]=trip',
	);

	const houses = [];
	for (const entry of housesRaw.data || []) {
		houses.push(await transformHouse(entry, usedNames));
	}

	const trips = [];
	for (const entry of tripsRaw.data || []) {
		trips.push(await transformTrip(entry, usedNames));
	}

	const tripById = new Map(trips.map((t) => [t.id, t.slug]));
	const ecosystem = await transformEcosystem(ecosystemRaw.data || ecosystemRaw, tripById, usedNames);

	return { houses, trips, ecosystem };
}

async function main() {
	ensureDir(CONTENT_DIR);
	resetCmsDir();

	let data;
	if (BACKUP_DIR) {
		data = await loadFromBackup(BACKUP_DIR);
	} else {
		console.warn('No --backup provided, using live Strapi REST API');
		data = await loadFromRest();
	}

	const { houses, trips, ecosystem } = data;

	fs.writeFileSync(path.join(CONTENT_DIR, 'houses.json'), JSON.stringify(houses, null, 2) + '\n');
	fs.writeFileSync(path.join(CONTENT_DIR, 'trips.json'), JSON.stringify(trips, null, 2) + '\n');
	fs.writeFileSync(path.join(CONTENT_DIR, 'ecosystem.json'), JSON.stringify(ecosystem, null, 2) + '\n');

	const pictureCount = [...houses, ...trips].reduce((n, item) => n + (item.pictures?.length || 0), 0);
	console.log(
		`Done: ${houses.length} houses, ${trips.length} trips, ${ecosystem.entries.length} ecosystem entries, ${pictureCount} CMS images (webp)`,
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
