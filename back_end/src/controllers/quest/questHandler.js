const express = require('express');
const {createQuest} = require("./createQuest");
const {createQuestSchema, updateQuestSchema} = require("./validation");
const {validateSchema} = require("../../middleware/schemaValidation");
const {getAllQuests} = require("./getQuests");
const {updateQuest} = require("./updateQuest");
const questRouter = express.Router();

questRouter.get('/all', async (req,res) => {
  const quests = await getAllQuests(req)
  if(quests){
    console.log('quests sent', quests)
    res.json({msg:"request successful", quests})
    res.status(200)
    return
  }
  res.json({msg: 'quest gathering failed'})
  res.status(401)
})


questRouter.post('/new', validateSchema(createQuestSchema), async (req,res) => {
  const newQuest = await createQuest(req)
  if(newQuest){
    console.log('quest created')
    res.json({msg:"request successful", quest: newQuest})
    res.status(200)
    return
  }
  res.json({msg: 'quest creation failed'})
  res.status(401)
})

questRouter.patch('/update', validateSchema(updateQuestSchema), async (req,res) => {
  const updatedQuest = await updateQuest(req)
  if(updatedQuest){
    console.log('quest updated')
    res.json({msg:"request successful", quest: updatedQuest})
    res.status(200)
    return
  }
  res.json({msg: 'quest creation failed'})
  res.status(401)
})


module.exports = questRouter