const calculatorService = require('../src/calculator/calculator.service')

describe('Calculator service test', () => {
  it("It should calculate the average of two numbers and round them using the 'Half Round Up' concept", () => {

    const first = 2
    const second = 3.5

    expect(calculatorService.average(first, second)).toStrictEqual({ "average": 3 })
  })
})