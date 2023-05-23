import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { Button, ThemeProvider, createTheme } from '@mui/material';

type QnA = {
  ques: string;
  desc: string;
  ans1: string;
  ans2: string;
};

interface TestProps {
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setSN: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
  EI: number;
  SN: number;
  TF: number;
  JP: number;
}

const theme = createTheme({
  palette: {
    //@ts-ignore
    customColor: {
      main: '#B38631', // 원하는 사용자 정의 색상
    },
  },
});

function Test(props: TestProps) {
  const navigate = useNavigate();
  const [number, setNumber] = useState<number>(1);
  const [data, setData] = useState<{
    [key: number]: QnA;
  }>({
    1: {
      ques: 'Q1. 매월 25일은 봉케팅의 날!',
      desc: '어떤 봉사처에서 하면 재밌을까나?',
      ans1: '많은 사람들과 즐겁게 이야기 나눌 수 있는 봉사처',
      ans2: '소규모로 팀을 이루고 서로 가까워질 수 있는 봉사처',
    },
    2: {
      ques: 'Q2. 오늘 온 봉사처는 처음이다!',
      desc: '막상 낯선 봉사처에 오니 약간 두근거리는군,,, 이럴 때는!',
      ans1: '빨리 친해지게 내가 먼저 말 걸어버리자 “다들 어디서 오셨어요~?”',
      ans2: '일단 깨똑이랑 DM 확인하는 척 해야겠다. 친해지는건 천천히,,,!',
    },
    3: {
      ques: 'Q3. 깨끗이 책상도 닦고, 창문도 닦고 마무리 중~',
      desc: '이제 곧 마칠 것 같은데 끝나고 나서,,,',
      ans1: '같이 봉사한 사람들하고 좀 더 친해지고 싶은데, 커피 마시러 가자고 할까?',
      ans2: '오늘의 벅찬 마음을 가지고 집에서 나만의 시간을 가져야겠어!',
    },
    4: {
      ques: 'Q4. 이번주 토요일은 레거시키친 봉사에 참여하는 날! ',
      desc: '당연히 레거시키친 봉사 필수품은,,,',
      ans1: '요리하고 정리하기에 알맞는 옷차림이지! ',
      ans2: '중꺾마. 중요한건 꺾이지 않는 봉사할 마음! ',
    },
    5: {
      ques: 'Q5. 내가 봉사활동 하는 이유?',
      desc: '여러가지 이유가 있지만 가장 큰 마음은 바로,,,',
      ans1: '끼니를 거르는 노인분들이 없도록 봉사활동을 통해 한국의 노인빈곤율을 낮추는 거야',
      ans2: '봉사활동이라는 문화를 만들어 나가는 것! 더 나은 세상을 내 손으로 만들 수 있다구',
    },
    6: {
      ques: 'Q6. KLC와 함께 하는 1년 후?',
      desc: '내가 참여한 봉사활동이 만들어 낼 미래는 어떨까? ',
      ans1: 'OECD 국가의 노인빈곤율 TOP 10안에는 없었으면 좋겠다 ',
      ans2: '노인들이 대한민국에서 살아가기에 조금 더 따스한 곳 이길',
    },
    7: {
      ques: 'Q7. KLC 활동을 한 오늘 하루를 돌아본다',
      desc: '나의 작은 행동이 누군가에게 큰 도움이 될 수 있다니,, 이런 점에서 정말 뿌듯해',
      ans1: '도시락을 만들고, 배달하고, 청소를 하고,, 노인분들의 삶에 실질적인 도움을 드렸다!',
      ans2: '봉사자들, 어르신들과 하루를 함께하고, 대화하고, 순간순간의 행복과 즐거움을 느꼈다!',
    },
    8: {
      ques: 'Q8. 어르신의 집에 방문했다!',
      desc: '나이가 들어서 여기저기 아픈 곳이 많다고 하시는 어르신,,,',
      ans1: '병원은 가보셨으려나? 제때 치료를 받아야 덜 아프실텐데 걱정이다.',
      ans2: '마음이 너무 쓰인다,,생활하실 때 크게 불편하지 않으셔야 할텐데',
    },
    9: {
      ques: 'Q9. 봉사활동을 통해 세상을 바꾸려면?',
      desc: '세상을 바꾸기 위한 가장 중요한 마음가짐은,,',
      ans1: '봉사를 통해 현실적인 문제를 해결하고 목표를 달성하는 것',
      ans2: '봉사를 통해 사람들의 따뜻한 마음과 연대를 나누고 소통하는 것',
    },
    10: {
      ques: 'Q10. 한국 노인빈곤율이 OECD 1위라고,,,?!',
      desc: '생각보다 너무 충격적인 수치다.. 봉사활동이라도 해야겠어!',
      ans1: '봉사단체 검색부터 해보자. 그 중에 나랑 잘 맞을 것 같은 곳에 신청 완료!',
      ans2: '오 몇번 검색했더니 알고리즘으로 여러 군데 뜨는구만! 여기 해보자!',
    },
    11: {
      ques: 'Q11. 봉케팅 성공 완료!',
      desc: '예약도 마쳤겠다, 이제 남은 준비는 뭐지?',
      ans1: '음… 일단 우선 공지를 한번 꼼꼼히 읽어볼까?',
      ans2: '예약했으니 90%는 끝났다. 10%는 따뜻한 마음과 열정을 가져가야지 ㅎㅎ',
    },
    12: {
      ques: 'Q12. 오늘의 봉사도 뿌듯하게 마무으리!',
      desc: '여기서 집까지 가는 길은,,,',
      ans1: '완벽하게 알고 있지. 00버스타고 ㅁㅁ에서 환승하면 30분정도 걸린다! ',
      ans2: '어떻게 가야하지? 좀 찾아봐야겠다',
    },
  });

  return (
    <div>
      <div
        style={{
          width: 350,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProgressBar
          completed={number.toString()}
          maxCompleted={12}
          bgColor="#B38631"
          width="300px"
          height="25px"
          transitionDuration="0.3s"
        />
        <div
          style={{
            marginTop: 20,
            color: '#B38631',
            fontSize: '25px',
            textAlign: 'center',
            fontWeight: 'bold',
            width: '300px',
          }}
        >
          {data[number].ques}
        </div>
        <div
          style={{
            marginTop: 20,
            color: 'black',
            fontSize: '18px',
            textAlign: 'center',
            width: '300px',
          }}
        >
          {data[number].desc}
        </div>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            style={{
              color: 'white',
              width: '300px',
              height: '120px',
              fontSize: 18,
              fontWeight: 'bold',
              borderRadius: 30,
              marginTop: 10,
              marginBottom: 10,
              padding: '10 ',
            }}
            onClick={() => {
              setNumber((number) => number + 1);
              if (number <= 3) {
                props.setEI((prevEI) => prevEI + 1);
              } else if (number >= 4 && number <= 6) {
                props.setSN((prevSN) => prevSN + 1);
              } else if (number >= 7 && number <= 9) {
                props.setTF((prevTF) => prevTF + 1);
              } else if (number >= 10 && number <= 12) {
                props.setJP((prevJP) => prevJP + 1);
              }
              if (number === 12) {
                navigate('/loading');
              }
            }}
          >
            {data[number].ans1}
          </Button>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            style={{
              color: 'white',
              width: '300px',
              height: '100px',
              fontSize: 18,
              fontWeight: 'bold',
              borderRadius: 30,
            }}
            onClick={() => {
              setNumber((number) => number + 1);
              if (number <= 3) {
                props.setEI((prevEI: number) => prevEI - 1);
              } else if (number >= 4 && number <= 6) {
                props.setSN((prevSN: number) => prevSN - 1);
              } else if (number >= 7 && number <= 9) {
                props.setTF((prevTF: number) => prevTF - 1);
              } else if (number >= 10 && number <= 12) {
                props.setJP((prevJP: number) => prevJP - 1);
              }
              if (number === 12) {
                navigate('/loading');
              }
            }}
          >
            {data[number].ans2}
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export { Test };
