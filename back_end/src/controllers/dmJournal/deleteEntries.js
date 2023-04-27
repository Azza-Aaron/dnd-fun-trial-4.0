const bcrypt = require('bcrypt')
const {getUser} = require("../../model/user");
const {deleteRow} = require("../../model");

const deleteJEntry = async (req) => {
  const thisUserId = req.session.user.id
  const dbUser = await getUser({id: thisUserId})
  const verified = await bcrypt.compare(req.body.password, dbUser.password);
  if(verified){
    const deleted = await deleteRow({id: req.body.id }, "dm_journal", thisUserId)
    if(deleted){
      return true
    }
  }
  console.log('failed')
  return false
}

module.exports = {
  deleteJEntry
}