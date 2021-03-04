import { handleNumberClick } from 'utils/handleNumberClick';
import { handleZeroClick } from 'utils/handleZeroClick';
import { handleDotClick } from 'utils/handleDotClick';
import { handleOperationClick } from 'utils/handleOperationClick';
import { handleCalculateClick } from 'utils/handleCalculateClick';

const buttons = setInput => {
  const empty = {
    symbol: '',
  };

  const one = {
    symbol: '1',
    onClick: () => handleNumberClick(1, setInput),
  };

  const two = {
    symbol: '2',
    onClick: () => handleNumberClick(2, setInput),
  };

  const three = {
    symbol: '3',
    onClick: () => handleNumberClick(3, setInput),
  };

  const four = {
    symbol: '4',
    onClick: () => handleNumberClick(4, setInput),
  };

  const five = {
    symbol: '5',
    onClick: () => handleNumberClick(5, setInput),
  };

  const six = {
    symbol: '6',
    onClick: () => handleNumberClick(6, setInput),
  };

  const seven = {
    symbol: '7',
    onClick: () => handleNumberClick(7, setInput),
  };

  const eight = {
    symbol: '8',
    onClick: () => handleNumberClick(8, setInput),
  };

  const nine = {
    symbol: '9',
    onClick: () => handleNumberClick(9, setInput),
  };

  const zero = {
    symbol: '0',
    onClick: () => handleZeroClick(setInput),
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
    onClick: () => handleCalculateClick(setInput),
  };

  const backspace = {
    symbol: 'DEL',
    onClick: () => setInput(prevState => prevState.slice(0, -1)),
  };

  const clear = {
    symbol: 'CLR',
    onClick: () => setInput(''),
  };

  return [
    [clear, backspace, percent, divide],
    [seven, eight, nine, times],
    [four, five, six, minus],
    [one, two, three, plus],
    [empty, zero, dot, equals],
  ];
};

export default buttons;
