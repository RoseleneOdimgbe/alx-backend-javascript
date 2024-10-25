#!/usr/bin/env node

const Utils = require('./utils');

/**
 * Mimics a request sent to an external API
 * @param totalAmount {number} - This is the total cost of the purchased item
 * @param totalShipping {number} - This is the cost of shipping the item
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
