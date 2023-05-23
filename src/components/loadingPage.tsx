import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

interface LoadingProps {
  MBTI: string;
  nickname: string;
}

function getCurrentTime() {
  const currentTime = new Date(Date.now())
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  return currentTime;
}

function Loading(props: LoadingProps) {
  const navigate = useNavigate();

  // `http://localhost:3001/api/result` api post 요청 필요.

  useEffect(() => {
    const url = 'http://52.231.66.105/api/result';

    const data = {
      nickname: props.nickname,
      mbti_type: props.MBTI,
      date_time: getCurrentTime(),
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log('요청 성공:', response.status);
      })
      .catch((error) => {
        console.error('요청 실패:', error.message);
      });
  }, [props.nickname, props.MBTI]);

  //여기서 포스트 요청해서 mySQL에  데이터 전송 필요함!!!

  setTimeout(() => {
    navigate(`/resultPage/${props.MBTI}`);
  }, 1500);
  return (
    <div>
      <h1> {props.nickname} 님의 봉사 유형은..?</h1>
    </div>
  );
}

export { Loading };
