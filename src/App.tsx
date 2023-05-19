import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Main, Test, Result, Loading } from './components';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { CreateGlobalStyle } from './styles';

function App() {
  const [EI, setEI] = useState<number>(0);
  const [SN, setSN] = useState<number>(0);
  const [TF, setTF] = useState<number>(0);
  const [JP, setJP] = useState<number>(0);
  const [MBTI, setMBTI] = useState<string>('');
  const [datas, setDatas] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  useEffect(() => {
    let data: string[] = [];
    if (EI > 0) {
      data.push('E');
    } else if (EI < 0) {
      data.push('I');
    }
    if (SN > 0) {
      data.push('S');
    } else if (SN < 0) {
      data.push('N');
    }
    if (TF > 0) {
      data.push('T');
    } else if (TF < 0) {
      data.push('F');
    }
    if (JP > 0) {
      data.push('J');
    } else if (JP < 0) {
      data.push('P');
    }

    const joinedData = data.join('');
    setDatas(joinedData);
    setMBTI(joinedData);
  }, [EI, SN, TF, JP, datas]);

  return (
    <BrowserRouter>
      <CreateGlobalStyle>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  setEI={setEI}
                  setSN={setSN}
                  setTF={setTF}
                  setJP={setJP}
                  setNickname={setNickname}
                  nickname={nickname}
                />
              }
            />
            <Route
              path="/testpage"
              element={
                <Test
                  setEI={setEI}
                  setSN={setSN}
                  setTF={setTF}
                  setJP={setJP}
                  EI={EI}
                  SN={SN}
                  TF={TF}
                  JP={JP}
                />
              }
            />
            <Route
              path="/loading"
              element={<Loading MBTI={MBTI} nickname={nickname} />}
            />
            <Route
              path={`/resultpage/:mbti/`}
              element={<Result MBTI={MBTI} />}
            />
          </Routes>
        </Layout>
      </CreateGlobalStyle>
    </BrowserRouter>
  );
}

export default App;
