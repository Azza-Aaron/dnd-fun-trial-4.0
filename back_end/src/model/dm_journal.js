const {client} = require('../dataBase')
const {updateAll} = require("./index");

const getAllDmJournalEntriesDb = async () => {
  const data = await client.query(`SELECT * FROM public.dm_journal`)
  return data.rows
}

const updatedEntryOnDb = async (req) => {
  console.log('updating entry..')
  const entryId = req.body.id
  delete req.body.id
  const whereText = `user_id = ${req.session.user.id} AND id = ${entryId}`
  return await updateAll(req.body, 'dm_journal', whereText)
}

module.exports = {
  updatedEntryOnDb,
  getAllDmJournalEntriesDb
}