const capitalize = require("../capitalize");

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes the first letter of a sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalizes the first letter of a sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("handles an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handles a string with only one character", () => {
  expect(capitalize("a")).toBe("A");
});
