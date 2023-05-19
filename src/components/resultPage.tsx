import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ResultProps {
  MBTI: string;
  nickname: string;
}

function Result(props: ResultProps) {
  const param: any = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    type_id: '',
    type_mbti: '',
    type_description: '',
    type_recommendation: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/mbti/${param.mbti}`)
      .then((Response) => {
        setData(Response.data[0]);
        console.log('RES:', Response.data[0]);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  console.log('데이터 콘솔로 찍기', data);
  console.log('데이터 객체 내부 값 콘솔로 찍기', data.type_id);

  return (
    <div>
      <div>
        {props.nickname}님의 타입은? {data.type_mbti}
      </div>

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
