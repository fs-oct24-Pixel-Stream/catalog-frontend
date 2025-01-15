// export const handleBackToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

export const handleBackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  requestAnimationFrame(scrollToTop);
};
