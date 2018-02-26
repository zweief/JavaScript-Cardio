/**
  @description Chunk array in chunks of given length
  @param {array} arr
  @param {number} chunks
  @returns {array}
**/

export function chunkArr(arr, chunks) {
  let chunkedArr = [];
  for (let i = 0; i < arr.length; i = i + chunks) {
    chunkedArr.push(arr.slice(i, i + chunks));
  }
  return chunkedArr;
}
