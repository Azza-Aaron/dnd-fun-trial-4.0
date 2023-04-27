const {getAllMobTypes} = require("../../model/beast_mob");


const getAllTypes = async () => {
  try {
    return await getAllMobTypes()
  } catch (e) {
    console.log(e, 'couldnt get types')
  }
}


module.exports = {
  getAllTypes
}