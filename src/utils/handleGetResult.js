const handleGetResult = (inputRef, setResult) => () => {
  // console.log(inputRef.current?.value.match(/[× ÷ + ⎯]+|[a-zA-Z 0-9 . ( )]+/g));
  // console.log(inputRef.current?.value.match(/[a-zA-Z 0-9 . [^(][^%]*%[\d\D][^)]]+/g));
  console.log(inputRef.current?.value.match(/[(](?:[^× ÷ + ⎯])[\d\D]*?[)]/g));

  setResult(20);
};

export { handleGetResult };
