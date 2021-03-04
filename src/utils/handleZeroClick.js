export const handleZeroClick = setInput => {
  setInput(prevState => (prevState.length > 0 ? prevState + 0 : ''));
};
