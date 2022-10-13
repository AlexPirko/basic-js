const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  
  let arr = str.split('');
  let count = 0;
  let encode = '';

  for(let i = 0; i < arr.length; i++) {
    count++;
      if(arr[i] !== arr[i + 1]) {
        if(count > 1) {
          encode += count;
        }
          encode += arr[i];
           count = 0;
      }
  }
  return encode;
}

module.exports = {
  encodeLine
};
