const dotenv = require('dotenv');
dotenv.config({ path: '/Users/hannaryu/Desktop/project/bbti-ts/.env' });

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect();

connection.query(
  'SELECT * FROM MBTIType',
  function (error: any, results: any, fields: any) {
    if (error) console.log(error);
    console.log(results);
  },
);

connection.end();
