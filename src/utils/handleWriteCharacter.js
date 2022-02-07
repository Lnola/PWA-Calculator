const handleWriteCharacter = (character, setInput, inputRef, setResult) => () => {
  const { selectionStart } = inputRef.current;
  inputRef.current.focus();

  setInput(
    prevState =>
      prevState.substring(0, selectionStart) + character + prevState.substring(selectionStart, prevState.length),
  );

  inputRef.current.blur(); // hide the chevron jump to end
  setResult('');

  // set the chevron to the old position, timeout for setState
  setTimeout(() => {
    inputRef.current.focus(); // hide the chevron jump to end
    inputRef.current.selectionStart = selectionStart + character.length;
    inputRef.current.selectionEnd = selectionStart + character.length;
  }, 1);
};

export { handleWriteCharacter };
