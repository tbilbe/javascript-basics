const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = (array) => array.join(',');

const csvStringToArray = (string) => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
  return;
}
const addToArray2 = (element, array) => {
  const newArray = [];
  array.map((oldArrayIndex) => newArray.push(oldArrayIndex));
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = (numbers) => numbers.map((num) => num.toString());

const uppercaseWordsInArray = (strings) => strings.map((string) => string.toUpperCase());

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
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
