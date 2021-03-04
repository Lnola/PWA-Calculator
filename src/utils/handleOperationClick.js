export const handleOperationClick = (symbol, setInput) => {
  setInput(prevState =>
    prevState.length > 0
      ? !isNaN(prevState[prevState.length - 1])
        ? prevState + symbol
        : prevState.slice(0, -1) + symbol
      : '',
  );
};
