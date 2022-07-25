const currentHeight = (setitem) => {
  const handleHeightWindow = () => setitem(window.pageYOffset);
  window.addEventListener('scroll', handleHeightWindow);
  return;
};

export default currentHeight;
