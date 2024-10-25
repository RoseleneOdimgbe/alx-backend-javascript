#!/usr/bin/env node

const Utils = require('./utils');

/**
 * This returns the integer sum of two numbers
 * @param a {number} - This is the first number
 * @param b {number} - This is the second number
 * @returns {number} The sum of the two numbers rounded up
 */
function calculateNumber(a, b) {
  return Utils.calculateNumber('SUM', a, b);
}

module.exports = calculateNumber;
