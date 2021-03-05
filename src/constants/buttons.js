import { handleNumberClick } from 'utils/handleNumberClick';
import { handleZeroClick } from 'utils/handleZeroClick';
import { handleDotClick } from 'utils/handleDotClick';
import { handleOperationClick } from 'utils/handleOperationClick';
import { handleCalculateClick } from 'utils/handleCalculateClick';

const buttons = (setInput, input, setResult) => {
  const more = {
    symbol: 'MORE',
    onClick: () => {},
  };

  const one = {
    symbol: '1',
    onClick: () => handleNumberClick(1, input, setInput, setResult),
  };

  const two = {
    symbol: '2',
    onClick: () => handleNumberClick(2, input, setInput, setResult),
  };

  const three = {
    symbol: '3',
    onClick: () => handleNumberClick(3, input, setInput, setResult),
  };

  const four = {
    symbol: '4',
    onClick: () => handleNumberClick(4, input, setInput, setResult),
  };

  const five = {
    symbol: '5',
    onClick: () => handleNumberClick(5, input, setInput, setResult),
  };

  const six = {
    symbol: '6',
    onClick: () => handleNumberClick(6, input, setInput, setResult),
  };

  const seven = {
    symbol: '7',
    onClick: () => handleNumberClick(7, input, setInput, setResult),
  };

  const eight = {
    symbol: '8',
    onClick: () => handleNumberClick(8, input, input, setInput, setResult),
  };

  const nine = {
    symbol: '9',
    onClick: () => handleNumberClick(9, input, setInput, setResult),
  };

  const zero = {
    symbol: '0',
    onClick: () => handleZeroClick(input, setInput, setResult),
  };

  const dot = {
    symbol: '.',
    onClick: () => handleDotClick(setInput),
  };

  const plus = {
    symbol: '+',
    onClick: () => handleOperationClick('+', setInput),
  };

  const minus = {
    symbol: '-',
    onClick: () => handleOperationClick('-', setInput),
  };

  const times = {
    symbol: '*',
    onClick: () => handleOperationClick('*', setInput),
  };

  const divide = {
    symbol: '/',
    onClick: () => handleOperationClick('/', setInput),
  };

  const percent = {
    symbol: '%',
    onClick: () => handleOperationClick('%', setInput),
  };

  const equals = {
    symbol: '=',
    onClick: () => handleCalculateClick(input, setResult),
  };

  const backspace = {
    symbol: 'DEL',
    onClick: () => setInput(prevState => prevState.slice(0, -1)),
  };

  const clear = {
    symbol: 'CLR',
    onClick: () => setInput(''),
  };

  const leftBrackets = {
    symbol: '(',
    onClick: () => handleNumberClick('(', input, setInput, setResult),
  };

  const rightBrackets = {
    symbol: ')',
    onClick: () => handleNumberClick(')', input, setInput, setResult),
  };

  const sin = {
    symbol: 'sin',
    onClick: () => {},
  };

  const cos = {
    symbol: 'cos',
    onClick: () => {},
  };

  const tg = {
    symbol: 'tg',
    onClick: () => {},
  };

  const ctg = {
    symbol: 'ctg',
    onClick: () => {},
  };

  const arcsin = {
    symbol: 'arcsin',
    onClick: () => {},
  };

  const arccos = {
    symbol: 'arccos',
    onClick: () => {},
  };

  const arctg = {
    symbol: 'arctg',
    onClick: () => {},
  };

  const arcctg = {
    symbol: 'arcctg',
    onClick: () => {},
  };

  const log = {
    symbol: 'log',
    onClick: () => {},
  };

  const ln = {
    symbol: 'ln',
    onClick: () => {},
  };

  const pi = {
    symbol: 'pi',
    onClick: () => {},
  };

  const euler = {
    symbol: 'euler',
    onClick: () => {},
  };

  const pow = {
    symbol: 'pow',
    onClick: () => {},
  };

  const root = {
    symbol: 'root',
    onClick: () => {},
  };

  const square = {
    symbol: 'square',
    onClick: () => {},
  };

  const squareRoot = {
    symbol: 'squareRoot',
    onClick: () => {},
  };

  const reciprical = {
    symbol: 'reciprical',
    onClick: () => {},
  };

  const deg = {
    symbol: 'deg',
    onClick: () => {},
  };

  const radian = {
    symbol: 'rad',
    onClick: () => {},
  };

  const binomialCoefficien = {
    symbol: 'binCo',
    onClick: () => {},
  };

  const swap = {
    symbol: 'SWAP',
    onClick: () => {},
  };

  return [
    [log, ln, leftBrackets, rightBrackets, sin],
    [clear, backspace, percent, divide, cos],
    [seven, eight, nine, times, tg],
    [four, five, six, minus, ctg],
    [one, two, three, plus, log],
    [more, zero, dot, equals, swap],
  ];
};

export default buttons;
