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
  let array = input.split(/(?=[+-])|(?<=[+-])/g);

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== '+' && array[index] !== '-') {
      const element = calculateOperations(array[index].split(/(?=[*/%])|(?<=[*/%])/g));
      array[index] = element;
    }
  }

  return calculateOperations(array);
};

export const calculateResult = input => {
  let array = input.split(/(?=[()])|(?<=[()])/g);

  while (array.length !== 1)
    for (let index = 0; index < array.length; index++) {
      if (array[index - 1] === '(' && array[index + 1] === ')' && array[index].length > 0) {
        array[index] = calculateHighPriorityOperations(array[index]);
        array.splice(index + 1, 1);
        let element = array.splice(index, 1);
        array.splice(index - 1, 1);

        array[index - 2] += element;
        if (array[index - 1] !== '(' && array[index - 1] !== ')') {
          element = array.splice(index - 1, 1);
          array[index - 2] += element;
        }
      }
    }

  return calculateHighPriorityOperations(array[0]);
};
