// The use of .toString is unnecessary here as string already contains a string
// also could have used template literal's

const sayHello = (string) => {
  return `Hello, ${ string.toString() }!`;
};

// Well done
const uppercase = (string) => string.toUpperCase();

// Well done
const lowercase = (string) => string.toLowerCase();

// Well done
const countCharacters = (string) => string.length;

// Code works fine but you could have used the method .charAt(0) instead
const firstCharacter = (string) => string[0];

// Well done
const firstCharacters = (string, n) => string.substr(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
