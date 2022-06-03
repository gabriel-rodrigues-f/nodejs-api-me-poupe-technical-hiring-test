const fs = require('fs')

module.exports = async (firstNumber, secondNumber, average) => {
  let servicePath = `./log/calculator.log`

  let log = JSON.stringify({
    'message processing log': {
      function: {
        name: 'average',
        description: `Averages two numbers and rounds the result to two decimal places using 'Half Round Up'`,
        structure: `parseFloat(Math.round((${firstNumber} + ${secondNumber}) / 2).toFixed(2))`,
        result: `${average.average}`
      },
      OverallStatus: 'success',
      timestamp: Date()
    }
  }) + '\n'
  return fs.appendFileSync(servicePath, log)
}