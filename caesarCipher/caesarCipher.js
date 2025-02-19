function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // Shift lowercase letters
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + shift) % 26) + 97
        );
      } else if (/[A-Z]/.test(char)) {
        // Shift uppercase letters
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
      }
      // Return unchanged for non-alphabetical characters
      return char;
    })
    .join("");
}

module.exports = caesarCipher;
