export const handleOperationClick = (symbol, setInput) => {
  setInput(prevState => {
    if (prevState.length <= 0) {
      return '';
    }

    if (prevState[prevState.length - 1] === '(' && symbol === '-') {
      return prevState + symbol;
    }

    if (prevState[prevState.length - 2] === '(' && prevState[prevState.length - 1] === '-') {
      return prevState;
    }

    if (/[0-9)]/.test(prevState[prevState.length - 1])) {
      return prevState + symbol;
    }

    return prevState.slice(0, -1) + symbol;
  });
};
