const getNthElement = (index, array) => {
  // for (let index = 0; index < array.length; index++){
  //   return array[index];
  // }
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

  // your code here
};

const numbersToStrings = (numbers) => {
  // use constructor String
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map( s => s.toUpperCase()) 
};

const reverseWordsInArray = (strings) => {
  return strings.map( s => s.split("").reverse().join("")) 
};

const onlyEven = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(index);
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
