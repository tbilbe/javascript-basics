const negate = (a) => !a;

const both = (a, b) => a && b;

const either = (a, b) => {
  return a || b;
}

const none = (a, b) => {
  return !a && !b;
}
const one = (a, b) => {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
};

const truthiness = (a) => a ? true : false;

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = (a) => {
  // your code here
};

const isEven = (a) => {
  // your code here
};

const isSquare = (a) => {
  // your code here
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
