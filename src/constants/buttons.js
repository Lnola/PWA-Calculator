import { handleNumberClick } from 'utils/handleNumberClick';
import { handleZeroClick } from 'utils/handleZeroClick';
import { handleDotClick } from 'utils/handleDotClick';
import { handleOperationClick } from 'utils/handleOperationClick';
import { handleCalculateClick } from 'utils/handleCalculateClick';

import buttonTypes from './buttonTypes';

const buttons = (setInput, input, setResult) => {
  const more = {
    symbol: 'MORE',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const one = {
    symbol: '1',
    onClick: () => handleNumberClick(1, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const two = {
    symbol: '2',
    onClick: () => handleNumberClick(2, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const three = {
    symbol: '3',
    onClick: () => handleNumberClick(3, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const four = {
    symbol: '4',
    onClick: () => handleNumberClick(4, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const five = {
    symbol: '5',
    onClick: () => handleNumberClick(5, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const six = {
    symbol: '6',
    onClick: () => handleNumberClick(6, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const seven = {
    symbol: '7',
    onClick: () => handleNumberClick(7, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const eight = {
    symbol: '8',
    onClick: () => handleNumberClick(8, input, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const nine = {
    symbol: '9',
    onClick: () => handleNumberClick(9, input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const zero = {
    symbol: '0',
    onClick: () => handleZeroClick(input, setInput, setResult),
    type: buttonTypes.normal,
  };

  const dot = {
    symbol: '.',
    onClick: () => handleDotClick(setInput),
    type: buttonTypes.normal,
  };

  const plus = {
    symbol: '+',
    onClick: () => handleOperationClick('+', setInput),
    type: buttonTypes.functional,
  };

  const minus = {
    symbol: '-',
    onClick: () => handleOperationClick('-', setInput),
    type: buttonTypes.functional,
  };

  const times = {
    symbol: '*',
    onClick: () => handleOperationClick('*', setInput),
    type: buttonTypes.functional,
  };

  const divide = {
    symbol: '/',
    onClick: () => handleOperationClick('/', setInput),
    type: buttonTypes.functional,
  };

  const percent = {
    symbol: '%',
    onClick: () => handleOperationClick('%', setInput),
    type: buttonTypes.functional,
  };

  const equals = {
    symbol: '=',
    onClick: () => handleCalculateClick(input, setResult),
    type: buttonTypes.bonus,
  };

  const backspace = {
    symbol: 'DEL',
    onClick: () => setInput(prevState => prevState.slice(0, -1)),
    type: buttonTypes.bonus,
  };

  const clear = {
    symbol: 'CLR',
    onClick: () => setInput(''),
    type: buttonTypes.bonus,
  };

  const leftBrackets = {
    symbol: '(',
    onClick: () => handleNumberClick('(', input, setInput, setResult),
    type: buttonTypes.bonus,
  };

  const rightBrackets = {
    symbol: ')',
    onClick: () => handleNumberClick(')', input, setInput, setResult),
    type: buttonTypes.bonus,
  };

  const sin = {
    symbol: 'sin',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const cos = {
    symbol: 'cos',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const tg = {
    symbol: 'tg',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const ctg = {
    symbol: 'ctg',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const arcsin = {
    symbol: 'arcsin',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const arccos = {
    symbol: 'arccos',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const arctg = {
    symbol: 'arctg',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const arcctg = {
    symbol: 'arcctg',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const log = {
    symbol: 'log',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const ln = {
    symbol: 'ln',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const pi = {
    symbol: 'pi',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const euler = {
    symbol: 'euler',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const pow = {
    symbol: 'pow',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const root = {
    symbol: 'root',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const square = {
    symbol: 'square',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const squareRoot = {
    symbol: 'squareRoot',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const reciprical = {
    symbol: 'reciprical',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const deg = {
    symbol: 'deg',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const radian = {
    symbol: 'rad',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const binomialCoefficient = {
    symbol: 'binCo',
    onClick: () => {},
    type: buttonTypes.bonus,
  };

  const swap = {
    symbol: 'SWAP',
    onClick: () => {},
    type: buttonTypes.bonus,
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
