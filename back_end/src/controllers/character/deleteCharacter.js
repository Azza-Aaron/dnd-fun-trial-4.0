const bcrypt = require('bcrypt')
const {client} = require("../../dataBase");
const {getUserFromId} = require("../../model/user");
const {deleteCharacter} = require("../../model/character");

const deleteChar = async (info, req) => {
  console.log('session id ', req.session.user.id)
  const dbUser = await client.query(getUserFromId([req.session.user.id]))
  console.log('dbUser ', dbUser)
  const verified = await bcrypt.compare(info.password, dbUser.rows[0].password);
  if(verified){
    console.log('verified', info)
    const deleted = await client.query(deleteCharacter([req.session.user.id, info.charId]))
    console.log(deleted)
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