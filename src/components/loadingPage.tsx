import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

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


  setTimeout(() => {
    navigate(`/resultPage/${props.MBTI}`);
  }, 3000);
  return (
    <div>
      <PacmanLoader color="#b38631" size={30} />
      <h1
        style={{
          fontSize: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#b38631',
          textShadow: '1px 2px 1px white',
        }}
      >
        {props.nickname} 님의 봉사 유형은..?
      </h1>
    </div>
  );
}

export { Loading };
