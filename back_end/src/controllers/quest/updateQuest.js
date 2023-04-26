const {updateQuestOnDb} = require('../../model/questBoard')


const updateQuest = async (req) => {
  try{
    return await updateQuestOnDb(req)
  } catch (e) {
    console.log(e, 'something went wrong updating to DB')
  }
}

module.exports = {
  updateQuest
}