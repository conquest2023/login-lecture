const mysql=require("mysql2");

const db =mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PSWORD,
    database:process.env.DB_DATEBASE,

});

db.connect();

module.exports=db;