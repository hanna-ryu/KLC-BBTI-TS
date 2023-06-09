import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Main, Test, Result, Loading, Nickname } from './components';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { CreateGlobalStyle } from './styles';
import axios from 'axios';

function App() {
  const [EI, setEI] = useState<number>(0);
  const [SN, setSN] = useState<number>(0);
  const [TF, setTF] = useState<number>(0);
  const [JP, setJP] = useState<number>(0);
  const [MBTI, setMBTI] = useState<string>('');
  const [datas, setDatas] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [volunteer, setVolunteer] = useState<Volunteer[]>([]);


  interface Volunteer {
    volunteer_name: string;
    volunteer_location: string;
    volunteer_type: string;
    img: string;
  }
  
  useEffect(() => {
    axios
      .get(`http://52.231.66.105/api/volunteer`)
      .then((Response) => {
        setVolunteer(Response.data[0]);
        console.log('VOL:', Response.data[0]);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);


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

  //@ts-ignore
  // function SetScreenSize(): void {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // }
  // useEffect(() => {
  //   SetScreenSize();
  // });

  return (
    <BrowserRouter>
      <CreateGlobalStyle>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Main setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
              }
            />
            <Route
              path="/nickname"
              element={
                <Nickname setNickname={setNickname} nickname={nickname} />
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
