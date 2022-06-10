//connects to an sqlite database

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./util/sql.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the sqlite database.');
});



