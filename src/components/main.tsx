import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface TestProps {
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setSN: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  nickname: string;
}

function Main(props: TestProps) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://52.231.66.105/api/results`)
      .then((Response: any) => {
        setCount(Response.data[0].total);
        console.log('RES:', Response.data[0].total);
      })
      .catch((Error: any) => {
        console.log(Error);
      });
  }, []);

  return (
    <div>
      <input
        value={props.nickname}
        onChange={(e) => props.setNickname(e.target.value)}
      ></input>

      <Button
        variant="contained"
        color="error"
        onClick={() => {
          navigate('/testpage');
          props.setEI(0);
          props.setSN(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        봉비티아이 테스트 시작!!
      </Button>
      <p>지금까지 {count}명이 참여했어요.</p>
    </div>
  );
}

export { Main };
