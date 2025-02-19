const caesarCipher = require("../caesarCipher"); // Adjust the path as necessary

describe("caesarCipher", () => {
  test("shifts characters correctly", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("handles punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("Z", 1)).toBe("A");
  });

  test("does not change non-alphabetical characters", () => {
    expect(caesarCipher("1234!@#$%^&*()", 3)).toBe("1234!@#$%^&*()");
  });
});
