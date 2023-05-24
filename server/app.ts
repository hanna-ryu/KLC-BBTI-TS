import express, { Application, Request, Response } from 'express';
import { resultRouter } from './result-router';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import mime from 'mime';
dotenv.config({ path: '/home/azureuser/KLC-BBTI-TS/.env' });

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

console.log(__dirname)

db.connect(() => console.log('DB연결에 성공했습니다! 🍒', __dirname));
db.on('error', (error: any) =>
  console.error('db 연결에 에러가 발생했습니다ㅠㅠ 🚒', error),
);

const app: Application = express();
const port: number = 5000;
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(port, "0.0.0.0", function () {
  console.log(`App is listening on port ${port} !`);
});

app.use('/api', resultRouter);


app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '../build/index.html'));
});

export { db };
