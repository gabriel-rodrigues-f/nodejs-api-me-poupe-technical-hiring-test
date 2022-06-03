const AddressService = require('./address.service')

module.exports = async (req, res) => {
  const { cep: zipCode } = req.body
  const responseAPIAddress = await AddressService.getAddress(zipCode)

  if (responseAPIAddress.errorType) {
    switch (responseAPIAddress.errorType) {
      case 'Internal Server Error':
        return res.status(500).json(responseAPIAddress)
      case 'Not Found':
        return res.status(400).json(responseAPIAddress)
      default:
        break;
    }
  }
  return res.json(responseAPIAddress)
}