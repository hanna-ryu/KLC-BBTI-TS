import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

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
    </div>
  );
}

export { Main };
