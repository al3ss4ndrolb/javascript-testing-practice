const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("merda"));

module.exports = reverseString;
