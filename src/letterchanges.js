/**
  @description  changes every char to the char that follows and caps the vowels
  @param {string} str
  @returns {string} str
**/

export function letterChanges(str) {
  let changedStr = str.toLowerCase().replace(/\w/g, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  changedStr = changedStr.replace(/a|e|i|o|u/g, char => {
    return char.toUpperCase();
  });

  return changedStr;
}

const result = letterChanges("z Z");
result;

// 97 101 105 111 117
