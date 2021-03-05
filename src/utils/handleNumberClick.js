import { calculateResult } from './calculateResult';

export const handleNumberClick = (symbol, input, setInput, setResult) => {
  setInput(prevState => prevState + symbol);
  setResult(calculateResult(input + symbol));
};
