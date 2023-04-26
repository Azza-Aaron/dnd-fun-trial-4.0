const {client} = require ('../../dataBase')
const {insertCharacter} = require("../../model/character");


const createChar = async (c, req) => {
    try{
      c.userId = req.session.user.id
      return await insertCharacter(c)
    } catch (e) {
      console.log(e)
      console.log('something went wrong add character to DB')
      return false
    }
}

module.exports = {
  createChar
}