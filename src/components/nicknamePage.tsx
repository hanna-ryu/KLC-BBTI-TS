import { useNavigate } from 'react-router-dom';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';

interface TestProps {
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  nickname: string;
}

function Nickname(props: TestProps) {
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      //@ts-ignore
      customColor: {
        main: '#B38631', // 원하는 사용자 정의 색상
      },
    },
  });
  return (
    <div>
      <div
        style={{
          width: 300,
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 300,
            fontSize: 20,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          닉네임을 입력해주세요!
        </div>
        <input
          type="text"
          maxLength={15}
          style={{
            margin: 30,
            height: 50,
            width: 260,
            border: 'none',
            borderBottom: '#B38631 solid 2px',
            appearance: 'none',
            textAlign: 'center',
            fontSize: 20,
          }}
          value={props.nickname}
          onChange={(e) => {
            props.setNickname(e.target.value);
          }}
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            //@ts-ignore
            color="customColor"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              borderRadius: 30,
            }}
            onClick={() => {
              navigate('/testpage');
            }}
          >
            시작하기
          </Button>
        </ThemeProvider>
      </div>
      <img
        alt="KLC로고이미지"
        style={{
          width: 200,
          height: 100,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        src="/KLC_LOGO_BLACK.png"
      ></img>
    </div>
  );
}

export { Nickname };
