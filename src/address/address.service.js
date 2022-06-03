const Address = require('./Address')
const addressAPIConsume = require('../config/address.consume')

class AddressService {
  static async getAddress(zipCode) {
    try {
      const address = await addressAPIConsume(zipCode)

      return address.hasOwnProperty('cep') ? Address.districtExists(address) :
        { message: `Não foi possível localizar o endereço com o CEP informado.`, errorType: 'Not Found' }

    } catch (error) {
      return { message: `Não foi possível estabelecer conexão com o serviço.`, errorType: 'Internal Server Error' }
    }
  }
}

module.exports = AddressService