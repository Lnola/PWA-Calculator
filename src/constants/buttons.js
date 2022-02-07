import { handleNumber } from 'utils/handleNumber';
import { handleBackspace } from 'utils/handleBackspace';

import buttonTypes from './buttonTypes';
import { handleOperation } from 'utils/handleOperation';

const buttons = (setInput, inputRef) => {
  const one = {
    symbol: '1',
    onClick: handleNumber('1', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const two = {
    symbol: '2',
    onClick: handleNumber('2', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const three = {
    symbol: '3',
    onClick: handleNumber('3', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const four = {
    symbol: '4',
    onClick: handleNumber('4', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const five = {
    symbol: '5',
    onClick: handleNumber('5', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const six = {
    symbol: '6',
    onClick: handleNumber('6', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const seven = {
    symbol: '7',
    onClick: handleNumber('7', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const eight = {
    symbol: '8',
    onClick: handleNumber('8', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const nine = {
    symbol: '9',
    onClick: handleNumber('9', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const zero = {
    symbol: '0',
    onClick: handleNumber('0', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const backspace = {
    symbol: 'DEL',
    onClick: handleBackspace(setInput, inputRef),
    type: buttonTypes.normal,
  };

  const clear = {
    symbol: 'AC',
    onClick: () => setInput(''),
    type: buttonTypes.normal,
  };

  const multiply = {
    symbol: '×',
    onClick: handleOperation('×', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const divide = {
    symbol: '÷',
    onClick: handleOperation('÷', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const add = {
    symbol: '+',
    onClick: handleOperation('+', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const subtract = {
    symbol: '-',
    onClick: handleOperation('-', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const dot = {
    symbol: '.',
    onClick: handleOperation('.', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const equals = {
    symbol: '=',
    onClick: () => {},
    type: buttonTypes.normal,
  };

  const openBracket = {
    symbol: '(',
    onClick: handleOperation('(', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const closeBracket = {
    symbol: ')',
    onClick: handleOperation(')', setInput, inputRef),
    type: buttonTypes.normal,
  };

  return [
    [seven, eight, nine, backspace, clear],
    [four, five, six, multiply, divide],
    [one, two, three, add, subtract],
    [zero, dot, equals, openBracket, closeBracket],
  ];
};

export default buttons;
