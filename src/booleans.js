// Well done
const negate = (a) => !a;

// Well done
const both = (a, b) => a && b;

// Well done
const either = (a, b) => {
  return a || b;
};

// Well done
const none = (a, b) => {
  return !a && !b;
};

// Well done
const one = (a, b) => {
  if (a && !b) {
    return true;
  }
  if (!a && b) {
    return true;
  }
  return false;
};

// Well done
const truthiness = (a) => a ? true : false;

// Well done
const isEqual = (a, b) => a === b;

// Well done
const isGreaterThan = (a, b) => a > b;

// Well done
const isLessThanOrEqualTo = (a, b) => a <= b;

// Well done
const isOdd = (a) => a % 2 === 1;

// Well done
const isEven = (a) => a % 2 === 0;

// Works fine but was expecting Math.sqrt(a) here
const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;

  // let total;
  // let iterator = 0;
  // do {
  //   total = iterator ** 2;
  //   iterator++;
  //   if (total === a) {
  //     return true;
  //   }
  // } while (total < a);
  // return false;
};

// Good job, could have used string.charAt(char) here though
const startsWith = (char, string) => string[0] === char;

// You've done well here but could have used a regex method instead.
//   return string.toLowerCase().match(/[a,e,i,o,u]/) ? true : false
const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
      if (string[i].toLowerCase() === vowels[n]) {
        return true;
      }
    }
  }
  return false;
};

// This is a good effort but it's the equivalent of taking a rocket on your commute
// to work when the bus will do.
// I'm impressed it works so you've done well.
// However, I would have opted for a slightly less over stated regex method:
//   return string.match(/[A-Z]/g) ? false : true
// Less moving parts and less scope for issues down the line.
// Well done though!

const isLowerCase = (string) => {
  for (let i = 0; i < string.length; i++) {
    // console.log(string.charCodeAt(1);
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
      return false;
    }
  }
  return true;
};

// isLowerCase('Abc')
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
