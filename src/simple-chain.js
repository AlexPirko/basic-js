const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },

  addLink(val) {
    if(val !== '' ) {
      this.arr.push(`( ${val} )`);
    }
    else {this.arr.push('()')}
    return this
  },

  removeLink(pos) {
    if (pos && Number.isInteger(pos) && this.arr[pos - 1]) {
      this.arr.splice(pos - 1, 1);
    }
    else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },

  reverseChain() {
   this.chain = this.arr.reverse();
   return this;
  },

  finishChain() {
    let fin = this.arr.join('~~');
    this.arr = [];
    return fin;    
  }
};

module.exports = {
  chainMaker,
};
