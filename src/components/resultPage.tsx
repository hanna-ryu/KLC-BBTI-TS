import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ResultProps {
  MBTI: string;
}

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

  return (
    <div>
      <div>{data.type_mbti}</div>

      <div> 유형 설명 : {data.type_description}</div>
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
