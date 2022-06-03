class CalculatorService {
  static average(firstNumber, secondNumber) {
    const average = (firstNumber + secondNumber) / 2
    const responseAverage = { average: this.halfRoundUp(average) }
    return responseAverage
  }

  static halfRoundUp(average) {
    return parseFloat(Math.round(average.toFixed(2)))
  }
}

module.exports = CalculatorService