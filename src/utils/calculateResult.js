const calculateOperations = array => {
  let result = +array[0];

  array.forEach((number, index) => {
    switch (number) {
      case '+':
        result += +array[index + 1];
        break;
      case '-':
        result -= +array[index + 1];
        break;
      case '*':
        result *= +array[index + 1];
        break;
      case '/':
        result /= +array[index + 1];
        break;
      case '%':
        result *= +array[index + 1] / 100;
        break;

      default:
        break;
    }
  });

  return result;
};

const calculateHighPriorityOperations = input => {
  let array = input.split(/(?=[+-])|(?<=[+-])/g); // ["expression", "+/-", "expression", ...]

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== '+' && array[index] !== '-') {
      const element = calculateOperations(array[index].split(/(?=[*/%])|(?<=[*/%])/g)); // splits expression to ["number", "*%/", "number", ...]
      array[index] = element; // ["number", "+/-", "number"... ]
    }
  }

  return calculateOperations(array); // calculates low priority operations
};

export const calculateResult = input => {
  let array = input.split(/(?=[()])|(?<=[()])/g);

  // the loop ensures it gets rid of all brackets
  while (array.length !== 1)
    for (let index = 0; index < array.length; index++) {
      // finds all numbers between brackets () and calculates them
      if (array[index - 1] === '(' && array[index + 1] === ')' && array[index].length > 0) {
        array[index] = calculateHighPriorityOperations(array[index]);
        array.splice(index + 1, 1); // removes brackets after the newly calculated element
        let element = array.splice(index, 1); // removes newly calculated element
        array.splice(index - 1, 1); // removes brackets before the newly calculated element

        array[index - 2] += element; // concats the newly calculated element with the element before
        if (array[index - 1] !== '(' && array[index - 1] !== ')') {
          element = array.splice(index - 1, 1); // fixes formating so array is always ["expression","bracket","expression", ...]
          array[index - 2] += element;
        }
      }
    }

  return calculateHighPriorityOperations(array[0]);
};
