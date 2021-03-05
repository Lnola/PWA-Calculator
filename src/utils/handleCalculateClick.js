import { calculateResult } from './calculateResult';

export const handleCalculateClick = (input, setResult) => {
  if (/[0-9)]/.test(input[input.length - 1])) {
    setResult(calculateResult(input));
  }
};
