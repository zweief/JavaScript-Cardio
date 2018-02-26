/** 
  @description flattens array
  @param {Array} arr
  @returns {Array}
**/

export function flattenArray(arr) {
  let flatArr = [];
  arr.map(el => flatArr.push(...el));
  return flatArr;
}

// shorte solution
// function flattenArray(arr) {
//   return [].concat(...arr);
// }
