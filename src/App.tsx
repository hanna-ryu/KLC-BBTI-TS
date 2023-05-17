import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Main, Test, Result, Loading } from './components';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Container } from '@mui/material';
import { CreateGlobalStyle } from './styles';

function App() {
  const [EI, setEI] = useState<number>(0);
  const [SN, setSN] = useState<number>(0);
  const [TF, setTF] = useState<number>(0);
  const [JP, setJP] = useState<number>(0);

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
            <Route path="/loading" element={<Loading />} />
            <Route path="/resultpage" element={<Result />} />
          </Routes>
        </Layout>
      </CreateGlobalStyle>
    </BrowserRouter>
  );
}

export default App;
