"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longestWord = longestWord;
/**
  @description Return longest word or array of longest words.
  @param {string} str
  @returns {(string|Array)}
**/

function longestWord(str) {
  var stringArr = str.match(/\w+/g).sort(function (a, b) {
    return b.length - a.length;
  }).filter(function (el, i, arr) {
    return arr[0].length === el.length;
  });

  return stringArr.length === 1 ? stringArr[0] : stringArr;
}