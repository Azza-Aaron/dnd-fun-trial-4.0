const express = require('express');
const {validateSchema} = require("../../middleware/schemaValidation");
const {dmJournalEntry, dmJournalEdit, deleteDmJournalEntrySchema} = require("./validation");
const {addDmJournalEntry} = require("./createEntry");
const {editDmJournalEntry} = require("./editEntry");
const {getAllDmJournalEntries} = require("./getAllEntries");
const {deleteJEntry} = require("./deleteEntries");
const dmJournalRouter = express.Router();

dmJournalRouter.get('/entries', async (req, res) => {
  const allEntries = await getAllDmJournalEntries()
  if(allEntries){
    res.json({msg:'all entries master ', entries: allEntries})
    res.status(200)
    return
  }
  res.json({msg:'something went wrong'})
  res.status(200)
})


dmJournalRouter.post('/new', validateSchema(dmJournalEntry), async (req,res) => {
  const entry = await addDmJournalEntry(req)
  if (entry){
    res.json({msg: 'journal entry added', entry: entry})
    res.status(200)
    return
  }
  res.json({msg: 'entry failed, contact admin'})
  res.status(200)
})

dmJournalRouter.patch('/edit', validateSchema(dmJournalEdit), async (req,res) => {
  const updatedEntry = await editDmJournalEntry(req)
  if (updatedEntry){
    res.json({msg: 'journal entry added', updatedEntry: updatedEntry})
    res.status(200)
    return
  }
  res.json({msg: 'entry failed, contact admin'})
  res.status(200)
})

dmJournalRouter.delete('/delete', validateSchema(deleteDmJournalEntrySchema), async (req, res) => {
  const deleted = await deleteJEntry(req)
  if(deleted){
    res.json({msg:'entry deleted'})
    res.status(200)
    return
  }
  res.json({msg:'something went wrong journal entry not deleted'})
  res.status(401)
})

module.exports = dmJournalRouter