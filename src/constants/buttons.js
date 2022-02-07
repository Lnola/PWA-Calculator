import { handleBackspace } from 'utils/handleBackspace';
import { handleGetResult } from 'utils/handleGetResult';
import { handleWriteCharacter } from 'utils/handleWriteCharacter';

import buttonTypes from './buttonTypes';

const buttons = (setInput, setResult, inputRef) => {
  const one = {
    symbol: '1',
    onClick: handleWriteCharacter('1', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const two = {
    symbol: '2',
    onClick: handleWriteCharacter('2', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const three = {
    symbol: '3',
    onClick: handleWriteCharacter('3', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const four = {
    symbol: '4',
    onClick: handleWriteCharacter('4', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const five = {
    symbol: '5',
    onClick: handleWriteCharacter('5', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const six = {
    symbol: '6',
    onClick: handleWriteCharacter('6', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const seven = {
    symbol: '7',
    onClick: handleWriteCharacter('7', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const eight = {
    symbol: '8',
    onClick: handleWriteCharacter('8', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const nine = {
    symbol: '9',
    onClick: handleWriteCharacter('9', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const zero = {
    symbol: '0',
    onClick: handleWriteCharacter('0', setInput, inputRef),
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
    onClick: handleWriteCharacter('×', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const divide = {
    symbol: '÷',
    onClick: handleWriteCharacter('÷', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const add = {
    symbol: '+',
    onClick: handleWriteCharacter('+', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const subtract = {
    symbol: '⎯',
    onClick: handleWriteCharacter('⎯', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const dot = {
    symbol: '.',
    onClick: handleWriteCharacter('.', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const equals = {
    symbol: '=',
    onClick: handleGetResult(inputRef, setResult),
    type: buttonTypes.normal,
  };

  const openBracket = {
    symbol: '(',
    onClick: handleWriteCharacter('(', setInput, inputRef),
    type: buttonTypes.normal,
  };

  const closeBracket = {
    symbol: ')',
    onClick: handleWriteCharacter(')', setInput, inputRef),
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
