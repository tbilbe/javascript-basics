// Well done
const add = (a, b) => {
  return a + b;
};

// Well done
const subtract = (a, b) => {
  return a - b;
};

// Well done
const multiply = (a, b) => a * b;

// Well done
const divide = (a, b) => a / b;

// Works but ** doesn't work in Internet Explorer, however Math.pow() does
const power = (a, b) => a ** b;

// Well done
const round = (a) => {
  return Math.round(a);
};

// Well done
const roundUp = (a) => {
  return Math.ceil(a);
};

// Well done
const roundDown = (a) => Math.floor(a);

// Well done
const absolute = (a) => {
  return Math.abs(a);
};

// Well done, watch your spacing here
const quotient = (a, b) => {
  return Math.trunc(a / b);
};

// Well done, watch your spacing here
const remainder = (a, b) => a % b;

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
