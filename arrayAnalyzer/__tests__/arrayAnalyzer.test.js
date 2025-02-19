const analyzeArray = require("../arrayAnalyzer.js");

describe("analyzeArray", () => {
  test("analyzes array of numbers correctly", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("works with negative numbers", () => {
    const result = analyzeArray([-1, -5, 0, 2, -3]);
    expect(result).toEqual({
      average: -1.4,
      min: -5,
      max: 2,
      length: 5,
    });
  });

  test("works with single element array", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("throws error for empty array", () => {
    expect(() => analyzeArray([])).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });

  test("throws error for non-array input", () => {
    expect(() => analyzeArray("not an array")).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });

  test("throws error for array with non-number elements", () => {
    expect(() => analyzeArray([1, 2, "3", 4])).toThrow(
      "All elements must be numbers"
    );
  });
});
