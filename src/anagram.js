/**
  @description checks if input strings are anagrams
  @param {string} str1
  @param {string} str2
  @returns {boolean}
**/

export function anagram(str1, str2) {
  const strArr = [str1, str2].map(val => val.replace(/\s|\W|_/g, "")).map(val =>
    val
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
  return strArr[0] === strArr[1] && (strArr[0].length && strArr[1].length)
    ? true
    : false;
}
