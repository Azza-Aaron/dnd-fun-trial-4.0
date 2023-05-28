const {camelizeKeys} = require("../../utils/snakeToCamel");

const requestData = async (req) => {
  const get = await fetch(`https://www.dnd5eapi.co${req.query.request}`)
  let data = await get.json()
  data = JSON.stringify(camelizeKeys(data))
  return JSON.parse(data)
}

module.exports = {
  requestData
}