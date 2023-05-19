import { useNavigate } from 'react-router-dom';

interface LoadingProps {
  MBTI: string;
  nickname: string;
}

function Loading(props: LoadingProps) {
  const navigate = useNavigate();

  //여기서 포스트 요청해서 mySQL에  데이터 전송 필요함!!!

  setTimeout(() => {
    navigate(`/resultPage/${props.MBTI}`);
  }, 1500);
  return (
    <div>
      <h1> {props.nickname} 님의 봉사 유형은..?</h1>
    </div>
  );
}

export { Loading };
