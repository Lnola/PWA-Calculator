const handleBackspace = (setInput, inputRef) => () => {
  const { selectionStart } = inputRef.current;
  inputRef.current.focus();

  setInput(
    prevState => prevState.substring(0, selectionStart - 1) + prevState.substring(selectionStart, prevState.length),
  );

  inputRef.current.blur(); // hide the chevron jump to end

  // set the chevron to the old position, timeout for setState
  setTimeout(() => {
    inputRef.current.focus(); // hide the chevron jump to end
    if (selectionStart !== 0) {
      inputRef.current.selectionStart = selectionStart - 1;
      inputRef.current.selectionEnd = selectionStart - 1;
    }
  }, 1);
};

export { handleBackspace };
