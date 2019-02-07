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

const isOdd = (a) => {
  const oddNum = a % 2;
  if (oddNum !== 0) { 
    return true;
  } else {
    return false;
  }
};

const isEven = (a) => {
  const eveNum = a % 2;
  if (eveNum === 0) { 
    return true;
  } else {
    return false;
  }
};

const isSquare = (a) => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  return string.charAt(0) === char;
};

const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) { 
      if ( string.toLowerCase().includes(vowels[i]) ) {
        return true;
      }
  }
    return false;
};

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
