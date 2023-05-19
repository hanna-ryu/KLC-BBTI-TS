import express, { Application, Request, Response } from 'express';
import { resultRouter } from './result-router';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '/Users/hannaryu/Desktop/project/bbti-ts/.env' });

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect(() => console.log('DB연결에 성공했습니다! 🍒'));
db.on('error', (error: any) =>
  console.error('db 연결에 에러가 발생했습니다ㅠㅠ 🚒'),
);

const app: Application = express();
const port: number = 3001;
app.use(cors());
app.use(express.json());

app.use('/api', resultRouter);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

export { db };
