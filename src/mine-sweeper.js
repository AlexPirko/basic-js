const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(m) {
  let arr = [];
  for (i = 0; i < m.length; i++) {
    arr[i] = [];
    for (j = 0; j < m.length; j++) {
      arr[i][j] = 0;
    }
  }

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m[0].length; j++) {
      let num = 0;
      if (i > 0) {
        if (m[i - 1][j]) num++;
        if (j < m[i].length) {
          if (m[i - 1][j + 1]) num++;
        }
        if (j > 0) {
          if (m[i - 1][j - 1]) num++;
        }
      }
      if (j > 0) {
        if (m[i][j - 1]) num++;
      }
      if (i < m.length - 1) {
        if (m[i + 1][j]) num++;
        if (m[i + 1][j + 1]) num++;
        if (j > 0) {
          if (m[i + 1][j - 1]) num++;
        }
      }
      if (j < m.length - 1) {
        if (m[i][j + 1]) num++;
      }

      arr[i][j] = num;
    }
  }
  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m[0].length; j++) {
      if (m[i][j]) arr[i][j] = 1;
    }
  }

  return arr;


}

module.exports = {
  minesweeper
};
