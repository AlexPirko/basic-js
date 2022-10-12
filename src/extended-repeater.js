const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let resStr = "";

  if (options.separator === undefined) {
      options.separator = "+";
  } else {
      options.separator = `${options.separator}`;
  }

  if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
  } else {
      options.additionSeparator = `${options.additionSeparator}`;
  }

  if (!options.repeatTimes) return str + options.addition;  

  for (let i = 1; i <= options.repeatTimes; i++) {
      resStr += str;
      if (!options.additionRepeatTimes && options.addition !== undefined) {
        resStr += options.addition;
    }  
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
          resStr += options.addition;
          if (j !== options.additionRepeatTimes) {
              resStr += options.additionSeparator;
          }
      }
      if (i !== options.repeatTimes) resStr += options.separator;
  }

  return resStr;
}


module.exports = {
  repeater
};


