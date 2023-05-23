import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// 테마 생성

interface TestProps {
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setSN: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
}

function Main(props: TestProps) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const theme = createTheme({
    palette: {
      //@ts-ignore
      customColor: {
        main: '#B38631', // 원하는 사용자 정의 색상
      },
    },
  });

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
      <div
        style={{
          width: 300,
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 70,
            display: 'flex',
            justifyContent: 'center',
            color: '#b38631',
            textShadow: '3px 4px 3px gray',
          }}
        >
          🔥BBTI🔥
        </h1>
        <div
          style={{
            width: 300,
            fontSize: 20,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          나는 어떤 유형의 '영프'일까? <br></br> 지금 봉비티아이를 통해<br></br>
          알아보러 갑시다🏃
        </div>
        <p style={{ fontSize: 18 }}>현재 총 {count}명의 영프가 참여했어요!</p>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            onClick={() => {
              navigate('/nickname');
              props.setEI(0);
              props.setSN(0);
              props.setTF(0);
              props.setJP(0);
            }}
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              borderRadius: 30,
            }}
          >
            시작하기
          </Button>
        </ThemeProvider>
      </div>
      <img
        alt="KLC로고이미지"
        style={{
          width: 200,
          height: 100,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        src="/KLC_LOGO_BLACK.png"
      ></img>
    </div>
  );
}

export { Main };
