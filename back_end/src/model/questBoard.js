const {updateAll} = require("./index");


const updateQuestOnDb = async (req) => {
  console.log('updating quest..')
  const questId = req.body.id
  delete req.body.id
  const whereText = `user_id = ${req.session.user.id} AND id = ${questId}`
  return await updateAll(req.body, 'quest_board', whereText)
}

module.exports = {
  updateQuestOnDb
}