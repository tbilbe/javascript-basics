const sayHello = (string) => {
  return 'Hello, ' + string.toString() + '!'
}

const uppercase = (string) => string.toUpperCase();

const lowercase = (string) => {
  return string.toLowerCase();
};

const countCharacters = (string) => string.length;

const firstCharacter = (string) => {
  return string[0];
};

const firstCharacters = (string, n) => {
  return string.substr(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
