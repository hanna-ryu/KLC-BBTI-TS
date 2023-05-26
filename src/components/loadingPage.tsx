import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
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


async function sendData(url: string, data: any) {
  try {
    const response = await axios.post(url, data);
    console.log('요청 성공:', response.status);
  } catch (error : any ) {
    console.error('요청 실패:', error.message);
  }
}

function Loading(props: LoadingProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const sendDataToServer = async () => {
      const url = 'http://52.231.66.105/api/result';

      const data = {
        nickname: props.nickname,
        mbti_type: props.MBTI,
        date_time: getCurrentTime(),
      };

      try {
        await sendData(url, data);
      } catch (error) {
        console.log('Error sending data:', error);
      }
    };

    sendDataToServer();
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
