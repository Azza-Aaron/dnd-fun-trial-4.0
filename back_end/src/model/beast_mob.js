const {client} = require('../dataBase')

const getAllMobTypes = async () => {
  const data = await client.query(`SELECT type FROM public.beast_mob`)
  return data.rows
}

const getAllMobs = async () => {
  const data = await client.query(`SELECT * FROM public.beast_mob`)
  return data.rows
}


module.exports = {
  getAllMobTypes,
  getAllMobs
}