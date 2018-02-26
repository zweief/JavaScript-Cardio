"use strict";

/**
  @description Chunk array in chunks of given length
  @param {array} arr
  @param {number} chunks
  @returns {array}
**/

function chunkArr(arr, chunks) {
  var chunkedArr = [];
  for (var i = 0; i < arr.length; i = i + chunks) {
    chunkedArr.push(arr.slice(i, i + chunks));
  }
  return chunkedArr;
}

var result = chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 4], 3);
result;