const stringLength = (str) => {
  if(str.length >= 1  && str.length <= 10) {
    return str.length;
  } else {
    throw new Error('String must be between 1 and 10 characters long');
  };
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
};

const capitalizeString = (str) => {
  if(typeof(str) === 'string') {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    throw new Error('Your input should be a string!');
  }
};

it('Should return the length of the string', () => {
  expect(stringLength('Mesi')).toBe(4);
});

it('Should return the length of the string', () => {
  expect(stringLength('Lex')).toBe(3);
});

// it('Should return the length of the string', () => {
//   expect(stringLength('Lex is my german shepard dog')).toThrow();
// });

it('Should reverse the string', () => {
  expect(reverseString('My string')).toBe('gnirts yM');
});

it('Should reverse the string', () => {
  expect(reverseString('Lex is my dog')).toBe('god ym si xeL');
});

describe('Testing the add method', () => {
  it('Should add two numbers', () => {
    const calc = new Calculator(4, 6);
    expect(calc.add()).toBe(10);
  });
  it('Should add two numbers', () => {
    const calc = new Calculator(-13, -6);
    expect(calc.add()).toBe(-19);
  });
  it('Should add two numbers', () => {
    const calc = new Calculator(-3, 6);
    expect(calc.add()).toBe(3);
  });
});

describe('Testing the subtract method', () => {
  it('Should subtract two numbers', () => {
    const calc = new Calculator(4, 6);
    expect(calc.subtract()).toBe(-2);
  });
  it('Should subtract two numbers', () => {
    const calc = new Calculator(-13, -6);
    expect(calc.subtract()).toBe(-7);
  });
  it('Should subtract two numbers', () => {
    const calc = new Calculator(-3, 6);
    expect(calc.subtract()).toBe(-9);
  });
});

describe('Testing the multiply method', () => {
  it('Should multiply two numbers', () => {
    const calc = new Calculator(4, 6);
    expect(calc.multiply()).toBe(24);
  });
  it('Should multiply two numbers', () => {
    const calc = new Calculator(-13, -6);
    expect(calc.multiply()).toBe(78);
  });
  it('Should multiply two numbers', () => {
    const calc = new Calculator(-3, 6);
    expect(calc.multiply()).toBe(-18);
  });
});

describe('Testing the divide method', () => {
  it('Should divide two numbers', () => {
    const calc = new Calculator(24, 6);
    expect(calc.divide()).toBe(4);
  });
  it('Should divide two numbers', () => {
    const calc = new Calculator(-13, -13);
    expect(calc.divide()).toBe(1);
  });
  it('Should divide two numbers', () => {
    const calc = new Calculator(8, 2);
    expect(calc.divide()).toBe(4);
  });
});

it('Should capitalize the string', () => {
  console.log()
  expect(capitalizeString('lex')).toBe('Lex');
});

it('Should capitalize the string', () => {
  console.log()
  expect(capitalizeString('mesike')).toBe('Mesike');
});