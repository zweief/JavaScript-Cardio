"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunkArr = chunkArr;
/**
  @description Chunk array in chunks of given length
  @param {Array} arr
  @param {number} chunks
  @returns {Array}
**/

function chunkArr(arr, chunks) {
  var chunkedArr = [];
  for (var i = 0; i < arr.length; i = i + chunks) {
    chunkedArr.push(arr.slice(i, i + chunks));
  }
  return chunkedArr;
}