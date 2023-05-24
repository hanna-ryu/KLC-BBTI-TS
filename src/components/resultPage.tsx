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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '145px',
          backgroundColor: '#B38631',
          textAlign: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: 50,
            color: 'white',
          }}
        >
          타입 : {data.type_mbti} 입니다.
        </span>
      </div>
      <div>
        <div>
          유형 설명 : {data.type_description} 유형은 어쩌구저쩌국ㅈ가저거주 한
          타입입니다.
        </div>
        <div>
          {' '}
          추천 봉사지 : {data.type_description} 추천 봉사지는 ㅁㄴㅇㄹ입니다.{' '}
        </div>

        <ThemeProvider theme={theme}>
          <div
            style={{ display: 'flex', justifyContent: 'center', width: 350 }}
          >
            <Button
              variant="contained"
              //@ts-ignore
              color="customColor"
              style={{
                color: 'white',
                width: '165px',
                height: '50px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 10,
                padding: '10 ',
              }}
            >
              링크 복사하기❤️
            </Button>
            <Button
              variant="contained"
              //@ts-ignore
              color="customColor"
              style={{
                color: 'white',
                width: '165px',
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
              테스트 다시하기✌️
            </Button>
          </div>
          <div
            style={{
              width: 350,
              height: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>KLC를 통해 할 수 있어요!</div>
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
            </div>
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
        </ThemeProvider>
      </div>
    </div>
  );
}

export { Result };
