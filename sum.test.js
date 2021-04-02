const sum = require('./sum.js');

test('should add two numbers together and return the sum', () => {
  // this is where my test code goes
  const result = sum(83, 6);

  expect(result).toBe(89);
});

test('should add positive to negative', () => {
  const result = sum(83, -6);

  expect(result).toBe(77);
});

test('should add two negative numbers', () => {
  const result = sum(-83, -6);

  expect(result).toBe(-89);
});

test('should fail if I give it one argument', () => {
  expect(() => {
    sum (83);
  }).toThrow(`You're missing an argument!`);
});

test('should convert number strings to numbers eg("9" + "3")', () => {
  const result = sum("9", "3");

  expect(result).toBe(12);
});