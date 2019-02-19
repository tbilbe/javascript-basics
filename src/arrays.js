// Well done with this one
const getNthElement = (index, array) => array[index % array.length];

// Well done
const arrayToCSVString = (array) => array.join(',');

// Well done
const csvStringToArray = (string) => string.split(',');

// This was failing the test due to a misplaced return
const addToArray = (element, array) => {
  array.push(element);
};

// Well done but could have used:
// array.concat(element);
const addToArray2 = (element, array) => {
  const newArray = [];
  array.map((oldArrayIndex) => newArray.push(oldArrayIndex));
  newArray.push(element);
  return newArray;
};

// Well done
const removeNthElement = (index, array) => array.splice(index, 1);

// Well done
const numbersToStrings = (numbers) => numbers.map((num) => num.toString());

// Well done
const uppercaseWordsInArray = (strings) => strings.map((string) => string.toUpperCase());

// Well done
const reverseWordsInArray = (strings) => strings.map(el => el.split('').reverse().join(''));

// Well done
const onlyEven = (numbers) => numbers.filter(nums => nums % 2 == 0);

// This is currently returning an empty array.
// Try:
// return array.filter(x => x !== array[index]);
const removeNthElement2 = (index, array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i != index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// This is a very good effort and passes the test
// However, you could have used .filter() to make this more concise
const elementsStartingWithAVowel = (strings) => {
  // console.log((strings[0]));
  const filteredStrings = [];
  // strings.filter(word => word[0] == 'A')
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] == 'A' || strings[i][0] == 'E' || strings[i][0] == 'I' || strings[i][0] == 'O' || strings[i][0] == 'U') {
      filteredStrings.push(strings[i]);
    }
  }
  return filteredStrings;
};

// Well done!
const removeSpaces = (string) => string.split(' ').join('');

// Well done! You could have used .reduce() here though
const sumNumbers = (numbers) => numbers.reduce((acc, next) => {
  return acc += next;
}, 0);

// This is currently creating multiple arrays which is why it's failing the test
// you should use the .sort() method here on strings

const sortByLastLetter = (strings) => {
  const first = strings.map(word => word.split(' '));
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
