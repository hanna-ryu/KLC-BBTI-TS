import { useNavigate } from 'react-router-dom';

interface ResultProps {
  MBTI: string;
}

function Loading(props: ResultProps) {
  const navigate = useNavigate();
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
