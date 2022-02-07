import { evaluate, round } from 'mathjs';

const handleGetResult = (inputRef, setResult) => () => {
  const cleanedInput = inputRef.current?.value
    .replace('×', '*')
    .replace('÷', '/')
    .replace('√', 'sqrt')
    .replace('ln', 'log')
    .replace('tg', 'tan')
    .replace('ctg', '1/tan')
    .replace('arcsin', 'asin')
    .replace('arccos', 'acos')
    .replace('arctg', 'atan')
    .replace('arcctg', '1/atan')
    .replace('π', 'pi')
    .replace('binom', 'combinations');

  try {
    setResult(round(evaluate(cleanedInput), 8));
  } catch ({ message }) {
    setResult(message);
  }
};

export { handleGetResult };
