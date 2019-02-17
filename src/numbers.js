const add = (a, b) => {
  return a + b
};

const subtract = (a, b) => {
  return a - b
};

const multiply = (a, b) => {
  return a * b
};

const divide = (a, b) => {
  return a / b
};

//Could have used Math.pow here. ** doesn't work in Internet Explorer
//Something to be mindful of in future.
const power = (a, b) => {
  return a ** b
};

const round = (a) => {
  return Math.round(a)
};

const roundUp = (a) => {
  return Math.ceil(a)
};

const roundDown = (a) => {
  return Math.floor(a)
};

const absolute = (a) => {
  return Math.abs(a)
};

//Could have used Math.trunc here also.
const quotient = (a, b) => {
  return parseInt(a / b)
};

const remainder = (a, b) => {
  return a % b
};

//Well done, good use of methods throughout.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
