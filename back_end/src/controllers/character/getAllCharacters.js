const {selectAll} = require("../../model");


const getAllChars = async (req) => {
  try{
    return await selectAll({userId: req.session.user.id}, 'character')
  } catch (e) {
    console.log(e)
    console.log('selecting characters failed')
  }
}

module.exports = {
  getAllChars
}