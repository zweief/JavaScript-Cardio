"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenArray = flattenArray;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/** 
  @description flattens array
  @param {Array} arr
  @returns {Array}
**/

function flattenArray(arr) {
  var flatArr = [];
  arr.map(function (el) {
    return flatArr.push.apply(flatArr, _toConsumableArray(el));
  });
  return flatArr;
}

// shorte solution
// function flattenArray(arr) {
//   return [].concat(...arr);
// }