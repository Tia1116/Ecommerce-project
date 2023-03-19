const mysql = require('mysql');
const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Tia1116..",
    port:"3307",
    database:"epmysql"
})
db.connect();
db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
  })
// db.end();
module.exports=db;