import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { handleOpenNewTab } from './utils/handleOpenNewTap';
import {handleCopyClipBoard} from  './utils/handleCopyLink'
import { volunteer } from './utils/volunteerData';
import { useLocation } from "react-router-dom";


interface ResultProps {
  MBTI: string;
}

// interface Volunteer {
//   volunteer_name: string;
//   volunteer_location: string;
//   volunteer_type: string;
//   img: string;
// }

const randomIndex = Math.floor(Math.random() * volunteer.length); // 랜덤으로 인덱스 선택
const randomVolunteer = volunteer[randomIndex];
const theme = createTheme({
  palette: {
    //@ts-ignore
    customColor: {
      main: '#B38631', // 원하는 사용자 정의 색상
    },
  },
});



async function fetchData(mbti: string) {
  try {
    const response = await axios.get(`http://52.231.66.105/api/mbti/${mbti}`);
    return response.data[0];
  } catch (error) {
    throw new Error('잠시 문제가 생겼어요! 새로고침을 해주세요 🥲');
  }
}


function Result(props: ResultProps) {
  const param: any = useParams();
  console.log(param);
  const navigate = useNavigate();
  const [data, setData] = useState({
    type_id: '',
    type_mbti: '',
    type_description: '',
    type_recommendation: '',
  });
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        if (param.mbti !== undefined) {
          const fetchedData = await fetchData(param.mbti);
          setData(fetchedData);
          console.log('RES:', fetchedData);
        }
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    };

    fetchDataAndSetData();
  }, []);


  // if (!data || !data.type_mbti || !data.type_description) {
  //   return <div>잠시 문제가 생겼어요! 새로고침을 해주세요 🥲</div>;
  // }
  const location = useLocation();

  return (
    <div
      style={{
        width: 330,
        display: 'flex',
        top: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '30px',
          backgroundColor: '#B38631',
          position: 'absolute',
          top: 0,
        }}
      ></div>
        { data && data.type_mbti && data.type_description ? (
          <div
            style={{
              fontSize: 26,
              color: '#B38631',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <br /> {data.type_mbti}
          </div>
        ) : (
          <div
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            정보를 불러오는 KLC 요정이 길을 헤매고 있어요!🧚‍♀️ 새로고침을 해주세요!
          </div>
        )}

      <div>
      { data && data.type_mbti && data.type_description && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {data.type_description}
        </div>
        )}
        <div
          style={{
            borderTop: '1.5px dotted #B38631',
            margin: '10px auto',
            width: '330px',
          }}
        ></div>
        <div style={{ textAlign: 'center', fontSize: '20px' }}>
          추천 봉사지는 👉 [ {randomVolunteer.volunteer_name} 🏃‍♀️]
        </div>
        <img
          src={randomVolunteer.img}
          alt="volunteerimage"
          style={{
            borderRadius: 20,
            width: 300,
            display: 'flex',
            margin: '7%',
          }}
        />
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
                height: '40px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 5,
                padding: '10 ',
                
              }}
              onClick={() => handleCopyClipBoard(`http://52.231.66.105/${location.pathname}`)}
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
                height: '40px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 5,
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
              height: 150,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderTop: '1.5px dotted #B38631',
                margin: '15px auto',
                width: '330px',
              }}
            ></div>
            <div style={{ textAlign: 'center' }}>KLC를 통해 할 수 있어요!</div>
            <div>
              <Button
                variant="contained"
                //@ts-ignore
                color="customColor"
                style={{
                  color: 'white',
                  width: '150px',
                  height: '40px',
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
                  height: '40px',
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
                height: '40px',
                fontSize: 15,
                fontWeight: 'bold',
                borderRadius: 30,
                marginTop: 5,
                marginBottom: 5,
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
