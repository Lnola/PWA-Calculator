import { evaluate } from 'mathjs';

const handleGetResult = (inputRef, setResult) => () => {
  try {
    setResult(
      evaluate(
        inputRef.current?.value
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
          .replace('binom', 'combinations'),
      ).toFixed(8),
    );
  } catch ({ message }) {
    setResult(message);
  }
};

export { handleGetResult };
