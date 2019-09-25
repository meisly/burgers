const mysql = require("mysql")

let PORT = process.env.PORT || 8080;


//Create MySQL connection

const conn;
if (process.env.JAWSDB_URL) {
    conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};
conn.connect(function (err, data) {
    if (err) throw err;
    console.log('Connected as id:' + conn.threadId)
});

module.exports = conn;