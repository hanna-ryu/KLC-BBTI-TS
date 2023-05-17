import { useNavigate } from 'react-router-dom';

function Result() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        테스트 다시하기
      </button>
    </div>
  );
}

export { Result };
