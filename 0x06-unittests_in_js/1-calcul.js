#!/usr/bin/env node

const Utils = require('./utils');

/**
 * This performs math operations and returns the answer
 * @param type {string} - The type of operation to be performed. Allowed
 * options are 'SUM', 'SUBTRACT', 'DIVIDE'
 * @param a {number} - This is the first number
 * @param b {number} - This is the second number
 * @returns {number} This is the sum of the two numbers rounded up
 */
function calculateNumber(type, a, b) {
  return Utils.calculateNumber(type, a, b);
}

module.exports = calculateNumber;
