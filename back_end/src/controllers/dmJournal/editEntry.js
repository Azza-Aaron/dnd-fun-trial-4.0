const {updatedEntryOnDb} = require("../../model/dm_journal");


const editDmJournalEntry = async (req) => {
  console.log(req.body)
  return await updatedEntryOnDb(req)
}

module.exports = {
  editDmJournalEntry
}