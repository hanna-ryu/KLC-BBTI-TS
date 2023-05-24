import { Button } from '@mui/material';
import React, { useState } from 'react';

const CopyLinkButton = (link: string) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // 메시지를 보여준 후 2초 후에 사라지도록 설정
  };

  return (
    <div>
      {showMessage && <p>링크가 복사되었습니다.</p>}
      <Button onClick={handleCopyLink}>링크 복사</Button>
    </div>
  );
};

export default CopyLinkButton;
