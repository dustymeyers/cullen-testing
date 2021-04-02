/**
 * Adds two numbers together and return the sum of their values
 * @param {*} numberOne 
 * @param {*} numberTwo 
 */
function sum(numberOne, numberTwo) {
  if (numberOne === undefined || numberTwo === undefined) {
    throw new Error("You're missing an argument!");
  }

  return Number(numberOne) + Number(numberTwo);
}

module.exports = sum;