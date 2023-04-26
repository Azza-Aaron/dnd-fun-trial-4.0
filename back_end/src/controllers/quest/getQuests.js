const {selectAll} = require("../../model");


const getAllQuests = async (req) => {
  try{
    return await selectAll({userId: req.session.user.id}, 'quest_board')
  } catch (e) {
    console.log(e)
    console.log('selecting quests failed')
  }
}

module.exports = {
  getAllQuests
}