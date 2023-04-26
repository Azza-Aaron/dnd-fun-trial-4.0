const {insertAll} = require("../../model");


const createQuest = async (req) => {
  req.body.userId = req.session.user.id
  try{
    return await insertAll(req.body, 'quest_board')
  } catch (e) {
    console.log(e)
    console.log('something went wrong at insert quest')
  }
}

module.exports = {
  createQuest
}