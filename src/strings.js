const sayHello = (string) => {
  return 'Hello, ' + string.toString() + '!'
}

const uppercase = (string) => string.toUpperCase();

const lowercase = (string) => string.toLowerCase();

const countCharacters = (string) => string.length;

const firstCharacter = (string) => string[0];

const firstCharacters = (string, n) => string.substr(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
