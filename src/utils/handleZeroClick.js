import { calculateResult } from './calculateResult';

export const handleZeroClick = (input, setInput, setResult) => {
  setInput(prevState => (prevState.length > 0 ? prevState + 0 : ''));
  setResult(calculateResult(input + 0));
};
