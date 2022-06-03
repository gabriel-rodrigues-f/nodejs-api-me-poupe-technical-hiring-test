class Address {
  static async districtExists(address) {
    if (address.bairro == "") address.message = `Não foi possível localizar o Bairro com o CEP informado: '${address.cep}'`
    return address
  }
}

module.exports = Address