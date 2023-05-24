const handleOpenNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener, noreferrer');
};

export {handleOpenNewTab}