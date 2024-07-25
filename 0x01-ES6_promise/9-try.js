/**
 * This executes a given math function, captures the result or error, and returns the result queue.
 * @param {Function} mathFunction - This is the math function to execute.
 * @returns {Array} - An array containing the result of the math function or
 * error message and a processing message.
 */
export default function guardrail(mathFunction) {
    const queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(`Error: ${error.message}`);
    } finally {
      queue.push('Guardrail was processed');
    }
    return queue;
  }
