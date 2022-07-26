/**
 * Scroll to the top of the page.
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const currentHeight = (setitem) => {
  const handleHeightWindow = () => setitem(window.pageYOffset);
  window.addEventListener('scroll', handleHeightWindow);
  return;
};
