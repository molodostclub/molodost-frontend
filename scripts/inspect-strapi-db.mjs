import Database from 'better-sqlite3';

const dbPath = process.argv[2];
const db = new Database(dbPath, { readonly: true });

console.log('=== files_related_morphs by type ===');
console.log(
	db
		.prepare(
			`SELECT related_type, field, COUNT(*) AS c FROM files_related_morphs GROUP BY related_type, field ORDER BY c DESC`,
		)
		.all(),
);

console.log('\n=== published houses ===');
console.log(db.prepare(`SELECT COUNT(*) AS c FROM houses WHERE published_at IS NOT NULL`).get());

console.log('\n=== sample house files ===');
console.log(
	db
		.prepare(
			`SELECT frm.*, f.url FROM files_related_morphs frm JOIN files f ON f.id = frm.file_id WHERE frm.related_type = 'api::house.house' LIMIT 3`,
		)
		.all(),
);

console.log('\n=== ecosystem component link ===');
console.log(db.prepare(`SELECT * FROM ecosystems_components LIMIT 3`).all());
console.log(
	db
		.prepare(
			`SELECT frm.field, f.url FROM files_related_morphs frm JOIN files f ON f.id = frm.file_id WHERE frm.related_type LIKE '%ecosystem%' LIMIT 5`,
		)
		.all(),
);

console.log('\n=== trip notes ===');
console.log(db.prepare(`SELECT * FROM trips_components LIMIT 5`).all());
