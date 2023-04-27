const {getAllDmJournalEntriesDb} = require("../../model/dm_journal");


const getAllDmJournalEntries = async () => {
    return await getAllDmJournalEntriesDb()
}

module.exports = {
  getAllDmJournalEntries
}