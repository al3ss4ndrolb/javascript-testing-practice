const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

capitalize("hello World");

console.log(capitalize("hello World"));
module.exports = capitalize;
