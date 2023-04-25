const express = require('express');
const {validateSchema} = require("../../middleware/schemaValidation");
const {charSchema, updateCharSchema, deleteCharSchema} = require("./validation");
const {createChar} = require("./createCharacter");
const {updateChar} = require("./updateCharacter");
const {deleteChar} = require("./deleteCharacter");
const userCharRouter = express.Router();

userCharRouter.post('/new/character', validateSchema(charSchema), async (req,res) => {
    const newChar = await createChar(req.body, req)
    if(newChar){
        res.json({msg: 'character created', char: newChar})
        res.status(200)
        return
    }
    res.json({msg: 'character creation failed'})
    res.status(401)
})

userCharRouter.patch('/update/character', validateSchema(updateCharSchema), async (req, res) => {
    const updatedChar = await updateChar(req.body, req)
    if (updatedChar){
        res.json({msg: 'updated character', char: updatedChar})
        res.status(200)
        return
    }
    res.json({msg: 'update to char failed'})
    res.status(401)
})

userCharRouter.delete('/delete/character', validateSchema(deleteCharSchema), async (req, res) => {
    const deleted = await deleteChar(req.body, req)
    if (deleted){
        res.json({msg: 'character deleted'})
        res.status(200)
        return
    }
    res.json({msg: 'deleting char failed'})
    res.status(401)
})

module.exports = userCharRouter