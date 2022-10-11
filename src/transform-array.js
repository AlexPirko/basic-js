const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);

  let res = [];
  let trArr = arr.slice();  

  for (let i = 0; i < trArr.length; i++) {
    if (trArr[i] === '--discard-next') {
        delete trArr[i + 1];
        i++;
    } else if (trArr[i] === '--discard-prev') {
        if (trArr[i - 1]) {
            res.pop();
        }
    } else if (trArr[i] === '--double-next') {
        if (trArr[i + 1]) {
            res.push(trArr[i + 1]);
        }
    } else if (trArr[i] === '--double-prev') {
        if (trArr[i - 1]) {
            res.push(trArr[i - 1]);
        }
    } else {
        res.push(trArr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};