import { useNavigate, useParams } from 'react-router-dom';

interface ResultProps {
  MBTI: string;
}

interface Data {
  [key: string]: { title: string; cont: string };
}

const data: Data = {
  ISTJ: { title: 'ISTJ', cont: 'ESTJ는 아주 강합니다.' },
  INTP: { title: 'INTP', cont: 'ESTJ는 아주 강합니다.' },
  ISFJ: { title: 'ISFJ', cont: 'ESTJ는 아주 강합니다.' },
  INFJ: { title: 'INFJ', cont: 'ESTJ는 아주 강합니다.' },
  INTJ: { title: 'INTJ', cont: 'ESTJ는 아주 강합니다.' },
  ISTP: { title: 'ISTP', cont: 'ESTJ는 아주 강합니다.' },
  ISFP: { title: 'ISFP', cont: 'ESTJ는 아주 강합니다.' },
  INFP: { title: 'INFP', cont: 'ESTJ는 아주 강합니다.' },
  ESFP: { title: 'ESFP', cont: 'ESTJ는 아주 강합니다.' },
  ENFP: { title: 'ENFP', cont: 'ESTJ는 아주 강합니다.' },
  ENTP: { title: 'ENTP', cont: 'ESTJ는 아주 강합니다.' },
  ESTJ: { title: 'ESTJ', cont: 'ESTJ는 아주 강합니다.' },
  ESFJ: { title: 'ESFJ', cont: 'ESTJ는 아주 강합니다.' },
  ESTP: { title: 'ESTP', cont: 'ESTJ는 아주 강합니다.' },
  ENTJ: { title: 'ENTJ', cont: 'ESTJ는 아주 강합니다.' },
  ENFJ: { title: 'ENFJ', cont: 'ESTJ는 아주 강합니다.' },
};

function Result(props: ResultProps) {
  const param: any = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div>{data[param.MBTI].title}</div>
      <div>{data[param.MBTI].cont}</div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        테스트 다시하기
      </button>
      <div>
        <a href="#"> 공유하기</a>
        <a href="#"> 후원하기</a>
        <a href="#"> 홈페이지 바로가기</a>
      </div>
    </div>
  );
}

export { Result };
