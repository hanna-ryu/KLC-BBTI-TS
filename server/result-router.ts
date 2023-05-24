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

resultRouter.post('/result', (req, res) => {
  const { nickname, mbti_type, date_time } = req.body;

  // MBTIType 테이블에서 mbti_type 검증
  const mbtiTypeQuery = 'SELECT type_id FROM MBTIType WHERE type_id = ?';
  db.query(mbtiTypeQuery, [mbti_type], (err: any, results: any) => {
    if (err) {
      console.error('쿼리 오류: ' + err.stack);
      res.sendStatus(500);
      return;
    }

    if (results.length === 0) {
      res.status(400).json({ error: '유효하지 않은 mbti_type입니다.' });
      return;
    }

    // MBTIResult 테이블에 새로운 결과 추가
    const insertQuery =
      'INSERT INTO MBTIResult (nickname, mbti_type, date_time) VALUES (?, ?, ?)';
    db.query(
      insertQuery,
      [nickname, mbti_type, date_time],
      (err: any, results: any) => {
        if (err) {
          console.error('쿼리 오류: ' + err.stack);
          res.sendStatus(500);
          return;
        }

        res.sendStatus(201);
      },
    );
  });
});

// 응답 개수 세는 api
resultRouter.get('/results', async (req, res, next) => {
  db.query(
    `SELECT COUNT(*) AS total FROM MBTIResult;`,
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

// 봉사처 가져오는 api
resultRouter.get('/volunteer', async (req, res, next) => {
  db.query(
    'SELECT * FROM Volunteer;',
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
