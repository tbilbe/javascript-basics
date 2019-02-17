//Good effort on all of these. Good usage of methods and clear and concise code.

const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return a !== b;
};

const truthiness = (a) => {
  return a ? true : false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

//An if else statement isn't really necessary here as when you ask the function to check
//if the number is not equal to 0, it will return as true or false anyway
//the following code would have sufficed:
//   return (a % 2) === 1

const isOdd = (a) => {
  const oddNum = a % 2;
  if (oddNum !== 0) {

    return true;
  } else {
    return false;
  }
};

//Same as above, except equal to 0 this time for even numbers:
//   return (a % 2) === 0

const isEven = (a) => {
  const eveNum = a % 2;
  if (eveNum === 0) {

    return true;
  } else {
    return false;
  }
};

//Same again:
// return Math.sqrt(a) % 1 === 0

const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

//Slightly over complicated this one, could have used a different method but very good effort.
// return string.startsWith(char);

const startsWith = (char, string) => {
  return string.charAt(0) === char;
};

//This one was hard for a lot of people but you've done very well here.
//A simpler way to complete this one would be:
//   return string.toLowerCase().match(/[a,e,i,o,u]/) ? true : false
// This incorporates regex to check the letters.

const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];


    for (let i = 0; i < vowels.length; i++) { 
      if ( string.toLowerCase().includes(vowels[i]) ) {
        return true;
      }
  }
    return false;
};

//This passes the test but the code is incorrect.
//The code will always pass the test as you've asked it to turn it into lowercase before running
//which isn't the intention of the test.
//the test should check for lowercase of capitals and fail if a capital is present
//The best way to solve this one is using regex again:
//   return string.match(/[A-Z]/g) ? false : true

const isLowerCase = (string) => {
  //this will return true;
  return string === string.toLowerCase();

  //the below is too much:
  // if (string === string.toLowerCase()) {
  //   return true;
  // } else {
  //   return false;
  // }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
