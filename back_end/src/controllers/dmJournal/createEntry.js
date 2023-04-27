const {insertAll} = require("../../model");
const moment = require("moment");

const addDmJournalEntry = async (req) => {
  try {
    req.body.date = moment()
    req.body.userId = req.session.user.id
    //console.log(req.body)
    return await insertAll(req.body, 'dm_journal')
  } catch (e) {
    console.log(e, 'issue inserting into db')
  }
}

module.exports = {addDmJournalEntry}