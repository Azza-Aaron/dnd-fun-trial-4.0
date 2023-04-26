const bcrypt = require('bcrypt')
const {client} = require("../../dataBase");
const {getUser} = require("../../model/user");
const {deleteRow} = require("../../model/")
const {deleteCharacter} = require("../../model/character");

const deleteChar = async (info, req) => {
  const thisUserId = req.session.user.id
  const dbUser = await getUser({id: thisUserId})
  const verified = await bcrypt.compare(info.password, dbUser.password);
  if(verified){
    const deleted = await deleteRow({id: info.id }, "character", thisUserId)
    if(deleted){
      return true
    }
  }
  console.log('failed')
  return false
}

module.exports = {
  deleteChar
}