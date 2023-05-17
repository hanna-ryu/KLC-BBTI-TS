import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/resultPage');
  }, 1500);
  return (
    <div>
      <h1> 로딩 페이지입니다 ...</h1>
    </div>
  );
}

export { Loading };
