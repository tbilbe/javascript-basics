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
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
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
  // your code here
};

const containsVowels = (string) => {
  // your code here
};

const isLowerCase = (string) => {
  // your code here
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
