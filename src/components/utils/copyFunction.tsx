import React from 'react';

function CopyLinkButton() {
  const copyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        console.log('링크가 복사되었습니다.');
      })
      .catch((error) => {
        console.error('링크 복사 실패:', error);
      });
  };

  return <button onClick={copyLink}>링크 복사</button>;
}

export  {CopyLinkButton};
