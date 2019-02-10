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
  return strings.map(s => s.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map(s => s.split("").reverse().join("")); 
};

const onlyEven = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(index);
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
  // const newArr = strings.map((string) => {
  //   return string.charAt(string.length - 1);
  // });
  // return newArr.sort();
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
