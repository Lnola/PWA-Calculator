import { handleBackspace } from 'utils/handleBackspace';
import { handleClear } from 'utils/handleClear';
import { handleGetResult } from 'utils/handleGetResult';
import { handleWriteCharacter } from 'utils/handleWriteCharacter';

import buttonTypes from './buttonTypes';

const buttons = (setInput, setResult, inputRef, layoutIndex, setLayoutIndex) => {
  const one = {
    symbol: '1',
    onClick: handleWriteCharacter('1', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const two = {
    symbol: '2',
    onClick: handleWriteCharacter('2', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const three = {
    symbol: '3',
    onClick: handleWriteCharacter('3', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const four = {
    symbol: '4',
    onClick: handleWriteCharacter('4', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const five = {
    symbol: '5',
    onClick: handleWriteCharacter('5', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const six = {
    symbol: '6',
    onClick: handleWriteCharacter('6', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const seven = {
    symbol: '7',
    onClick: handleWriteCharacter('7', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const eight = {
    symbol: '8',
    onClick: handleWriteCharacter('8', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const nine = {
    symbol: '9',
    onClick: handleWriteCharacter('9', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const zero = {
    symbol: '0',
    onClick: handleWriteCharacter('0', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const backspace = {
    symbol: 'DEL',
    onClick: handleBackspace(setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const clear = {
    symbol: 'AC',
    onClick: handleClear(setInput, setResult),
    type: buttonTypes.functional,
  };

  const multiply = {
    symbol: '×',
    onClick: handleWriteCharacter(' × ', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const divide = {
    symbol: '÷',
    onClick: handleWriteCharacter(' ÷ ', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const add = {
    symbol: '+',
    onClick: handleWriteCharacter(' + ', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const subtract = {
    symbol: '-',
    onClick: handleWriteCharacter(' - ', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const dot = {
    symbol: '.',
    onClick: handleWriteCharacter('.', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const equals = {
    symbol: '=',
    onClick: handleGetResult(inputRef, setResult),
    type: buttonTypes.functional,
  };

  const openBracket = {
    symbol: '(',
    onClick: handleWriteCharacter('(', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const closeBracket = {
    symbol: ')',
    onClick: handleWriteCharacter(')', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const square = {
    symbol: '^2',
    onClick: handleWriteCharacter('^2', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const pow = {
    symbol: '^n',
    onClick: handleWriteCharacter('^', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const squareRoot = {
    symbol: '√',
    onClick: handleWriteCharacter('√(', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const nRoot = {
    symbol: 'n √',
    onClick: handleWriteCharacter('√(', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const swap = {
    symbol: '↪',
    onClick: () => setLayoutIndex(Math.abs(layoutIndex - 1)),
    type: buttonTypes.functional,
  };

  const empty = {
    symbol: '',
    onClick: () => {},
    type: buttonTypes.normal,
  };

  const log = {
    symbol: 'log',
    onClick: handleWriteCharacter('log(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const ln = {
    symbol: 'ln',
    onClick: handleWriteCharacter('ln(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const sin = {
    symbol: 'sin',
    onClick: handleWriteCharacter('sin(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const cos = {
    symbol: 'cos',
    onClick: handleWriteCharacter('cos(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const tg = {
    symbol: 'tg',
    onClick: handleWriteCharacter('tg(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const ctg = {
    symbol: 'ctg',
    onClick: handleWriteCharacter('ctg(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const arcsin = {
    symbol: 'arcsin',
    onClick: handleWriteCharacter('arcsin(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const arccos = {
    symbol: 'arccos',
    onClick: handleWriteCharacter('arccos(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const arctg = {
    symbol: 'arctg',
    onClick: handleWriteCharacter('arctg(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const arcctg = {
    symbol: 'arcctg',
    onClick: handleWriteCharacter('arcctg(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const pi = {
    symbol: 'π',
    onClick: handleWriteCharacter('π', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const e = {
    symbol: 'e',
    onClick: handleWriteCharacter('e', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const binomialCoefficient = {
    symbol: 'nCr',
    onClick: handleWriteCharacter('binom(', setInput, inputRef, setResult),
    type: buttonTypes.functional,
  };

  const comma = {
    symbol: ',',
    onClick: handleWriteCharacter(', ', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const abs = {
    symbol: 'abs',
    onClick: handleWriteCharacter('abs(', setInput, inputRef, setResult),
    type: buttonTypes.normal,
  };

  const primaryLayout = [
    [square, pow, squareRoot, backspace, clear],
    [seven, eight, nine, openBracket, closeBracket],
    [four, five, six, multiply, divide],
    [one, two, three, add, subtract],
    [swap, zero, dot, empty, equals],
  ];

  const secondaryLayout = [
    [square, pow, squareRoot, backspace, clear],
    [log, ln, abs, openBracket, closeBracket],
    [sin, cos, tg, ctg, binomialCoefficient],
    [arcsin, arccos, arctg, arcctg, nRoot],
    [swap, pi, e, comma, equals],
  ];

  return [primaryLayout, secondaryLayout][layoutIndex];
};

export default buttons;
