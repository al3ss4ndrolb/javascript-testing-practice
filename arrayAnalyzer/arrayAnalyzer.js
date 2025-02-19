function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Input must be a non-empty array of numbers");
  }

  if (!array.every((num) => typeof num === "number")) {
    throw new Error("All elements must be numbers");
  }

  return {
    average: array.reduce((sum, num) => sum + num, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = analyzeArray;
