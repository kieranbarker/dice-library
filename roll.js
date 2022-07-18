const roll = (function () {

  "use strict";

  /**
   * Randomly shuffle an array.
   * https://stackoverflow.com/a/2450976/1293256
   * @param {any[]} array The array to shuffle.
   * @returns {any[]} The shuffled array.
   */
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  /**
   * Create an array of integers from start to end.
   * @param {number} start The starting integer.
   * @param {number} end The ending integer.
   * @returns {number[]} An array of integers.
   */
  function range(start, end) {
    const nums = [];

    for (let num = start; num <= end; num += 1) {
      nums.push(num);
    }

    return nums;
  }

  /**
   * Roll a two-sided die.
   * @returns {number} An integer from 1 to 2 inclusive.
   */
  function d2() {
    return shuffle(range(1, 2))[0];
  }

  /**
   * Roll a four-sided die.
   * @returns {number} An integer from 1 to 4 inclusive.
   */
  function d4() {
    return shuffle(range(1, 4))[0];
  }

  /**
   * Roll a six-sided die.
   * @returns {number} An integer from 1 to 6 inclusive.
   */
  function d6() {
    return shuffle(range(1, 6))[0];
  }

  /**
   * Roll an eight-sided die.
   * @returns {number} An integer from 1 to 8 inclusive.
   */
  function d8() {
    return shuffle(range(1, 8))[0];
  }

  /**
   * Roll a ten-sided die.
   * @returns {number} An integer from 1 to 10 inclusive.
   */
  function d10() {
    return shuffle(range(1, 10))[0];
  }

  /**
   * Roll a twelve-sided die.
   * @returns {number} An integer from 1 to 12 inclusive.
   */
  function d12() {
    return shuffle(range(1, 12))[0];
  }

  /**
   * Roll a twenty-sided die.
   * @returns {number} An integer from 1 to 20 inclusive.
   */
  function d20() {
    return shuffle(range(1, 20))[0];
  }

  return { d2, d4, d6, d8, d10, d12, d20 };

})();
