export const handleDotClick = setInput => {
  setInput(prevState => (prevState.length > 0 ? prevState + '.' : 0 + '.'));
};
