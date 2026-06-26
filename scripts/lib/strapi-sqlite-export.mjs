import Database from 'better-sqlite3';

export function openStrapiDb(dbPath) {
	return new Database(dbPath, { readonly: true });
}

export function loadPublishedHouses(db) {
	return db
		.prepare(
			`SELECT id, title, subtitle, description, area, people_min AS peopleMin, people_max AS peopleMax,
        base_price AS basePrice, base_price_2 AS basePrice2, slug, is_individual AS isIndividual,
        is_mars AS isMars, is_baikal AS isBaikal, is_luxiping AS isLuxiping
      FROM houses WHERE published_at IS NOT NULL ORDER BY id`,
		)
		.all();
}

export function loadPublishedTrips(db) {
	return db
		.prepare(
			`SELECT id, title, subtitle, description, price_adult AS priceAdult, price_child AS priceChild,
        is_all_day AS isAllDay, slug, duration_text AS durationText
      FROM trips WHERE published_at IS NOT NULL ORDER BY id`,
		)
		.all();
}

export function getEntityFiles(db, relatedType, relatedId, field) {
	return db
		.prepare(
			`SELECT f.url, frm."order"
       FROM files_related_morphs frm
       JOIN files f ON f.id = frm.file_id
       WHERE frm.related_type = ? AND frm.related_id = ? AND frm.field = ?
       ORDER BY frm."order"`,
		)
		.all(relatedType, relatedId, field);
}

export function getTripNotes(db, tripId) {
	return db
		.prepare(
			`SELECT n.id, n.text, tc."order"
       FROM trips_components tc
       JOIN components_note_notes n ON n.id = tc.component_id
       WHERE tc.entity_id = ? AND tc.field = 'notes'
       ORDER BY tc."order"`,
		)
		.all(tripId);
}

export function loadEcosystemEntries(db) {
	return db
		.prepare(
			`SELECT e.id, e.title, e.description, e.page_path AS pagePath, ec."order"
       FROM ecosystems_components ec
       JOIN components_ecosystem_entry_ecosystem_entries e ON e.id = ec.component_id
       WHERE ec.field = 'entries'
       ORDER BY ec."order"`,
		)
		.all();
}

export function getComponentCover(db, componentId) {
	const row = db
		.prepare(
			`SELECT f.url
       FROM files_related_morphs frm
       JOIN files f ON f.id = frm.file_id
       WHERE frm.related_type = 'ecosystem-entry.ecosystem-entry'
         AND frm.related_id = ? AND frm.field = 'cover'
       LIMIT 1`,
		)
		.get(componentId);
	return row?.url || null;
}

export function getTripSlug(db, tripId) {
	const row = db.prepare(`SELECT slug FROM trips WHERE id = ?`).get(tripId);
	return row?.slug || null;
}

export function getEcosystemTripSlug(db, entryId) {
	const row = db
		.prepare(
			`SELECT trip_id AS tripId FROM components_ecosystem_entry_ecosystem_entries_trip_links WHERE ecosystem_entry_id = ? LIMIT 1`,
		)
		.get(entryId);
	if (!row?.tripId) return null;
	return getTripSlug(db, row.tripId);
}
