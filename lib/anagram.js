"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anagram = anagram;
/**
  @description checks if input strings are anagrams
  @param {string} str1
  @param {string} str2
  @returns {boolean}
**/

function anagram(str1, str2) {
  var strArr = [str1, str2].map(function (val) {
    return val.replace(/\s|\W|_/g, "");
  }).map(function (val) {
    return val.toLowerCase().split("").sort().join("");
  });
  return strArr[0] === strArr[1] && strArr[0].length && strArr[1].length ? true : false;
}