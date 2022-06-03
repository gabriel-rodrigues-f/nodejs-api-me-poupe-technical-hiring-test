const calculatorService = require('./calculator.service')
const calculatorLog = require('./calculator.log')

module.exports = async (req, res) => {
  const { first: firstNumber, second: secondNumber } = req.body
  const average = calculatorService.average(firstNumber, secondNumber)

  calculatorLog(firstNumber, secondNumber, average)
  return res.json(average)
}