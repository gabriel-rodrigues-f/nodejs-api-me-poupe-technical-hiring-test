const axios = require('axios')

module.exports = async zipCode => {
  const { data: address } = await axios({
    method: `get`,
    url: `https://viacep.com.br/ws/${zipCode}/json`,
  })
  return address
}