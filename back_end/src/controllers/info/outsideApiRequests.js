
const requestData = async (req) => {
  const get = await fetch(`https://www.dnd5eapi.co${req.query.request}`)
  return await get.json()
}

module.exports = {
  requestData
}