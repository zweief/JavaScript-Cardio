/**
  @description Return longest word or array of longest words.
  @param {string} str
  @returns {(string|Array)}
**/

function longestWord(str) {
  let stringArr = str
    .match(/\w+/g)
    .sort((a, b) => b.length - a.length)
    .filter((el, i, arr) => arr[0].length === el.length);

  return stringArr.length === 1 ? stringArr[0] : stringArr;
}

const result = longestWord("Hello world. It is a cold day.");
result;
