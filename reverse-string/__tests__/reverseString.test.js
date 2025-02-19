const reverseString = require("../reverseString");

test("String reverses", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("Palindrome", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("Special characters", () => {
  expect(reverseString("!@#$%^&*()")).toBe(")(*&^%$#@!");
});

test("Whitespace", () => {
  expect(reverseString("  hello  ")).toBe("  olleh  ");
});
