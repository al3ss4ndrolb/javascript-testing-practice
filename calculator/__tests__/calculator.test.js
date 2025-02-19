const calculator = require("../calculator");

test("Add two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract two numbers", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});

test("Divide two numbers", () => {
  expect(calculator.divide(3, 1)).toBe(3);
});

test("Divide one of the numbers for 0", () => {
  expect(() => calculator.divide(3, 0)).toThrow("Cannot divide");
});
