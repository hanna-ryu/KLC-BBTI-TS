import { Router } from 'express';
import { db } from './app';
const resultRouter = Router();

// http://localhost:3001/api/mbti/ISFJ로 Get 요청을 하면 데이터를 보내줌.

resultRouter.get('/mbti/:type', async (req, res, next) => {
  const type = req.params.type;
  db.query(
    `SELECT * FROM MBTIType WHERE type_id = '${type}';`,
    (error: any, results: any, fields: any) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(results);
        res.send(results);
      }
    },
  );
});

export { resultRouter };
