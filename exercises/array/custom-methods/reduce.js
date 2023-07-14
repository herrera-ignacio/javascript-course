const assert = require('node:assert/strict');

/**
 * 
 * @param {Array} arr 
 * @param {(acc, any) => } reduceFn 
 * @param {any} initialValue 
 */
function customReducer(arr, reduceFn, initialValue) {
  let res = initialValue;
  arr.forEach((val) => {
    res = reduceFn(res, val)
  });
  return res;
}

/**
 * Example
 */
const arr = [1,2,3];
const reduceFn = (num1, num2) => num1 + num2;
const res = customReducer(arr, reduceFn, 10);

assert.equal(customReducer(arr, reduceFn, 0), 6);
assert.equal(customReducer(arr, reduceFn, 10), 16);
