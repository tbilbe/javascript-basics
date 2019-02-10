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

const reverseWordsInArray = (strings) => strings.map(el => el.split('').reverse().join(''));

const onlyEven = (numbers) => numbers.filter(nums => nums % 2 == 0);

const removeNthElement2 = (index, array) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (i != index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  console.log((strings[0]))
  const filteredStrings = []
  // strings.filter(word => word[0] == 'A')
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] == 'A' || strings[i][0] == 'E' || strings[i][0] == 'I' || strings[i][0] == 'O' || strings[i][0] == 'U') {
      filteredStrings.push(strings[i])
    }
  }
  return filteredStrings
};

const removeSpaces = (string) => string.split(' ').join('');

const sumNumbers = (numbers) => numbers.reduce((acc, next) => { return acc += next }, 0);

const sortByLastLetter = (strings) => {
  const first = strings.map(word => word.split(' '))
  const second = first.reverse();
  return second;
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
