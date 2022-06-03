const addressService = require('../src/address/address.service')

describe('Address service tests', () => {
  it('Should consume the API and return full Address', async () => {

    const fullAddress = "07160-170"

    expect(await addressService.getAddress(fullAddress)).toStrictEqual({
      "cep": "07160-170",
      "logradouro": "Avenida José Brumatti",
      "complemento": "até 798/799",
      "bairro": "Jardim Santo Expedito",
      "localidade": "Guarulhos",
      "uf": "SP",
      "ibge": "3518800",
      "gia": "3360",
      "ddd": "11",
      "siafi": "6477"
    })
  })

  it('It Should consume the api and return all the data together with a descriptive message about the "district" field', async () => {

    const addressWithoutDistrict = "18150-000"

    expect(await addressService.getAddress(addressWithoutDistrict)).toStrictEqual({
      "cep": "18150-000",
      "logradouro": "",
      "complemento": "",
      "bairro": "",
      "localidade": "Ibiúna",
      "uf": "SP",
      "ibge": "3519709",
      "gia": "3451",
      "ddd": "15",
      "siafi": "6495",
      "message": "Não foi possível localizar o Bairro com o CEP informado: '18150-000'"
    })
  })

  it('Should consume the API and return an error message', async () => {

    const addressNotFound = "00000-000"

    expect(await addressService.getAddress(addressNotFound)).toStrictEqual({
      message: `Não foi possível localizar o endereço com o CEP informado.`, errorType: 'Not Found'
    }
    )
  })

  it('Should return error when trying to connect to the service', async () => {

    const invalidAddress = "test/test"

    expect(await addressService.getAddress(invalidAddress)).toStrictEqual({
      message: `Não foi possível estabelecer conexão com o serviço.`, errorType: 'Internal Server Error'
    })
  })
})