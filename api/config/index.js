const mysql = require('mysql');

// create a connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dolfinz",
    database: "challengerdb"
});

// open connection
con.connect(err => {
    if (err) throw err;
    console.log("Connection to database established!");
});

module.exports = con;