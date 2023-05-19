import { useNavigate } from 'react-router-dom';

interface ResultProps {
  MBTI: string;
}

function Loading(props: ResultProps) {
  const navigate = useNavigate();

  //여기서 포스트 요청해서 mySQL에  데이터 전송 필요함!!!

  setTimeout(() => {
    navigate(`/resultPage/${props.MBTI}`);
  }, 1500);
  return (
    <div>
      <h1> 로딩 페이지입니다 ...</h1>
    </div>
  );
}

export { Loading };
