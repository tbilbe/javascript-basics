//Well done! Could have also used template literals here to make things more concise.
// return ´Hello, ${string}!´
const sayHello = (string) => {
  return 'Hello, ' + string + '!'
};

//Well done
const uppercase = (string) => {

  return string.toUpperCase()
};

//Well done
const lowercase = (string) => {
  return string.toLowerCase()
};

//Well done
const countCharacters = (string) => {
  return string.length
};

//Well done
const firstCharacter = (string) => {
  return string.charAt(0)
};

//Well done
const firstCharacters = (string, n) => {
  return string.substring(string, n)
};

//Extremely well done on all these. Used the best methods for all.

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
