const express = require('express')
const router = express.Router()
const calculatorController = require('./calculator.controller')
const { body, validationResult } = require('express-validator')

module.exports = router.post('/calculator/average',

  body('first').exists().notEmpty().trim().isNumeric().toFloat(),
  body('second').exists().notEmpty().trim().isNumeric().toFloat(),

  async (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json(errors.array())
    next()

  }
  , calculatorController)