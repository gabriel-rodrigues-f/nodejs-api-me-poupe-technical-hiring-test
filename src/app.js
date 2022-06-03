const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const AddressRoute = require('./address/address.route')
const calculatorRoute = require('./calculator/calculator.route')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(morgan('combined', { skip: (req, res) => res.statusCode < 400 }))
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(calculatorRoute)
    this.app.use(AddressRoute)
  }
}

module.exports = new App().app