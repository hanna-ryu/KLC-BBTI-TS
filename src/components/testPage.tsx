import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
type QnA = {
  ques: string;
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

function Test(props: TestProps) {
  const navigate = useNavigate();
  const [number, setNumber] = useState<number>(1);
  const [data, setData] = useState<{
    [key: number]: QnA;
  }>({
    1: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    2: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    3: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    4: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    5: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    6: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    7: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    8: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    9: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    10: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    11: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
    12: {
      ques: 'EI 성향 문제입니다.',
      ans1: 'E성향 대답입니다.',
      ans2: 'I성향 대답입니다.',
    },
  });

  return (
    <div>
      <div>{number} / 12</div>
      <div>{data[number].ques}</div>
      <button
        onClick={() => {
          setNumber((number) => number + 1);
          if (number <= 3) {
            props.setEI((prevEI) => prevEI + 1);
          } else if (number >= 4 && number <= 6) {
            props.setSN((prevSN) => prevSN + 1);
          } else if (number >= 7 && number <= 7) {
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
      </button>
      <button
        onClick={() => {
          setNumber((number) => number + 1);
          if (number <= 3) {
            props.setEI((prevEI: number) => prevEI - 1);
          } else if (number >= 4 && number <= 6) {
            props.setSN((prevSN: number) => prevSN - 1);
          } else if (number >= 7 && number <= 7) {
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
      </button>
    </div>
  );
}

export { Test };
