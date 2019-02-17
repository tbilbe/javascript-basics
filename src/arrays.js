//Really good effort on these. Arrays can be solved in many different ways
//You've used clear and concise code which is easy to read and understand
//Well done!

const getNthElement = (index, array) => {
  // first find the index in the array
  const newITem = array.findIndex(item => item === array[index]);
  // return the array[index] item will display the item:
  return array[newITem];
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // splice mutates the original array(second parameter is n of items to remove)
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  // use constructor String
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(s => s.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map(s => s.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(item => item !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(string => {
    return string[0].toLowerCase() === 'a' || string[0].toLowerCase() === 'e' || string[0].toLowerCase() === 'i' || string[0].toLowerCase() === 'o' || string[0].toLowerCase() === 'u';
  });
};

const removeSpaces = (string) => {
  return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

const sortByLastLetter = (strings) => {
  const newArr = strings.sort((a, b) => {
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArr;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
