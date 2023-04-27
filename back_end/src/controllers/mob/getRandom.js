const {getAllMobs} = require("../../model/beast_mob");

const getRandoMob = async (type) => {
  const mobs = await getAllMobs()
  const filtered = mobs.filter((mob) => mob.type.includes(type.type))
  const index = Math.floor(Math.random() * filtered.length)
  return filtered[index]
}

module.exports = {
  getRandoMob
}