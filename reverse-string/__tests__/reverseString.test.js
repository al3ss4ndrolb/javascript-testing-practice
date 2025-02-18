const reverseString = require("../reverseString");

test("String reverses", () => {
  expect(reverseString("hello")).toBe("olleh");
});
