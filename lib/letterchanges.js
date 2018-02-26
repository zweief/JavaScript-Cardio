"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.letterChanges = letterChanges;
/**
  @description  changes every char to the char that follows and caps the vowels
  @param {string} str
  @returns {string} str
**/

function letterChanges(str) {
  var changedStr = str.toLowerCase().replace(/\w/g, function (char) {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  changedStr = changedStr.replace(/a|e|i|o|u/g, function (char) {
    return char.toUpperCase();
  });

  return changedStr;
}

var result = letterChanges("z Z");
result;

// 97 101 105 111 117