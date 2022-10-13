const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  
  let arr = [];
  let str = n.toString();
  let length = str.length;

  for (let i = 0; i < length; i++) {
    if (i == 0) {
      arr.push(+str.slice(1));
    } else if (i == length - 1) {
      arr.push(+str.slice(0, length - 1));
    } else {
      arr.push(+(str.slice(0, i) + str.slice(i + 1)));
    }
  }
  return Math.max.apply(null, arr)
}

module.exports = {
  deleteDigit
};
