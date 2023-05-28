const {client} = require('../dataBase')
const {camelizeKeys} = require("../utils/snakeToCamel");

const getAllMobTypes = async () => {
  const data = await client.query(`SELECT type FROM public.beast_mob`)
  return data.rows
}

const getAllMobs = async () => {
  const data = await client.query(`SELECT * FROM public.beast_mob`)
  const camelData = JSON.stringify(camelizeKeys(data.rows))
  return JSON.parse(camelData)
}


module.exports = {
  getAllMobTypes,
  getAllMobs
}