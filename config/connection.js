const mysql = require("mysql")

//Create MySQL connection

const conn;

if (process.env.JAWSDB_URL) {
    conn = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};
conn.connect();

module.exports = conn;