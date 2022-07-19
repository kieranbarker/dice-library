const roll = (function () {
  "use strict";

  const dice = {
    d2: range(2),
    d4: range(4),
    d6: range(6),
    d8: range(8),
    d10: range(10),
    d12: range(12),
    d20: range(20),
  };

  /**
   * Create an array of integers from 1 to n.
   * @param {number} n The final integer.
   * @returns {number[]} An array of integers.
   */
  function range(n) {
    const nums = [];

    for (let i = 1; i <= n; i += 1) {
      nums.push(i);
    }

    return nums;
  }

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
   * Roll a two-sided die.
   * @returns {number} An integer from 1 to 2 inclusive.
   */
  function d2() {
    return shuffle(dice.d2)[0];
  }

  /**
   * Roll a four-sided die.
   * @returns {number} An integer from 1 to 4 inclusive.
   */
  function d4() {
    return shuffle(dice.d4)[0];
  }

  /**
   * Roll a six-sided die.
   * @returns {number} An integer from 1 to 6 inclusive.
   */
  function d6() {
    return shuffle(dice.d6)[0];
  }

  /**
   * Roll an eight-sided die.
   * @returns {number} An integer from 1 to 8 inclusive.
   */
  function d8() {
    return shuffle(dice.d8)[0];
  }

  /**
   * Roll a ten-sided die.
   * @returns {number} An integer from 1 to 10 inclusive.
   */
  function d10() {
    return shuffle(dice.d10)[0];
  }

  /**
   * Roll a twelve-sided die.
   * @returns {number} An integer from 1 to 12 inclusive.
   */
  function d12() {
    return shuffle(dice.d12)[0];
  }

  /**
   * Roll a twenty-sided die.
   * @returns {number} An integer from 1 to 20 inclusive.
   */
  function d20() {
    return shuffle(dice.d20)[0];
  }

  return { d2, d4, d6, d8, d10, d12, d20 };
})();
