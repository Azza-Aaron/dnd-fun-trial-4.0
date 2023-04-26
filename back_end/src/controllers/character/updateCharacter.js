const {updateCharacter} = require("../../model/character");


const updateChar = async (c, req) => {
  console.log('this is c ', c)
  try{
    return await updateCharacter(c, req)
  } catch (e) {
    console.log(e)
    console.log('couldnt update char in DB')
    return false
  }
}

module.exports = {
  updateChar
}