const express = require('express')
const router = express.Router()
const AdressController = require('./address.controller')

module.exports = router.post('/address/searchaddress',

  (req, res, next) => {
    const { cep: zipCode } = req.body
    const zipCodeRegEx = new RegExp(`[0-9]{5}-[0-9]{3}`)
    const zipCodeAlert = {
      message: `Por gentileza, informe um CEP válido. O formato do CEP deve ser: xxxxx-xxx.`
    }
    if (!zipCodeRegEx.test(zipCode)) return res.status(422).json(zipCodeAlert)
    next()
  }

  , AdressController)