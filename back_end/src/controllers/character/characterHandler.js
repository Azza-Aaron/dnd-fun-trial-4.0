const express = require('express');
const {validateSchema} = require("../../middleware/schemaValidation");
const {charSchema} = require("./validation");
const userCharRouter = express.Router();

userCharRouter.post('/new/character', validateSchema(charSchema), async (req,res) => {

})

module.exports = userCharRouter