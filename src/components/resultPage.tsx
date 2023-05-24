import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';

interface ResultProps {
  MBTI: string;
}

const theme = createTheme({
  palette: {
    //@ts-ignore
    customColor: {
      main: '#B38631', // 원하는 사용자 정의 색상
    },
  },
});

function Result(props: ResultProps) {
  const param: any = useParams();
  console.log(param)
  const navigate = useNavigate();
  const [data, setData] = useState({
    type_id: '',
    type_mbti: '',
    type_description: '',
    type_recommendation: '',
  });

  useEffect(() => {
    axios
      .get(`http://52.231.66.105/api/mbti/${param.mbti}`)
      .then((Response) => {
        setData(Response.data[0]);
        console.log('RES:', Response.data[0]);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <div>
      <div>{data.type_mbti}</div>

      <div> 유형 설명 : {data.type_description}</div>
      <ThemeProvider theme={theme}>
        <div>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            style={{
              color: 'white',
              width: '150px',
              height: '50px',
              fontSize: 15,
              fontWeight: 'bold',
              borderRadius: 30,
              marginTop: 10,
              marginBottom: 10,
              padding: '10 ',
            }}
          >
            링크복사하기
          </Button>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            style={{
              color: 'white',
              width: '150px',
              height: '50px',
              fontSize: 15,
              fontWeight: 'bold',
              borderRadius: 30,
              marginTop: 10,
              marginBottom: 10,
              padding: '10 ',
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            테스트 다시하기
          </Button>
          <div style={{ width: 350, height: 200 }}>
            <div>KLC를 통해 할 수 있어요!</div>
            <Button
              variant="contained"
              //@ts-ignore
              color="customColor"
              style={{
                color: 'white',
                width: '150px',
                height: '50px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 10,
                padding: '10 ',
              }}
              onClick={() => {
                handleOpenNewTab(
                  'https://booking.naver.com/booking/12/bizes/430023',
                );
              }}
            >
              봉케팅 하기💪
            </Button>
            <Button
              variant="contained"
              //@ts-ignore
              color="customColor"
              style={{
                color: 'white',
                width: '180px',
                height: '50px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 10,
                padding: '10 ',
              }}
              onClick={() => {
                handleOpenNewTab('https://www.instagram.com/korealegacy/');
              }}
            >
              인스타그램 구경가기👀
            </Button>
            <Button
              variant="contained"
              //@ts-ignore
              color="customColor"
              style={{
                color: 'white',
                width: '330px',
                height: '50px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 10,
                padding: '10 ',
              }}
              onClick={() => {
                handleOpenNewTab(
                  'https://secure.donus.org/korealegacy/pay/step1',
                );
              }}
            >
              단돈 1만원으로 도시락 5인분 기부하기 🍱
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export { Result };
