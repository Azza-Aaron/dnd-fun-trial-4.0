const express = require('express');
const {validateSchema} = require("../../middleware/schemaValidation");
const {mobSchema, mobNameSchema, mobTypeSchema} = require("./validation");
const {getRandoMob} = require("./getRandom");
const {getMob} = require("./getOne");
const {createMob} = require("./createMob");
const {getAllTypes} = require("./getTypes");
const {getAllMobs} = require("../../model/beast_mob");
const mobRouter = express.Router();

mobRouter.get('/all', async(req, res) => {
  const mobs = await getAllMobs()
  if(mobs){
    res.json({msg: "mobs master ", mobs:mobs})
    res.status(200)
    return
  }
  res.json({msg: 'sorry no mobs, something went wrong'})
  res.status(401)
})


mobRouter.get('/types', async(req, res) => {
  const types = await getAllTypes()
  if(types){
    res.json({msg: "types master ", types:types})
    res.status(200)
    return
  }
  res.json({msg: 'sorry no types, something went wrong'})
  res.status(401)
})

mobRouter.post('/random/type', validateSchema(mobTypeSchema), async (req,res) => {
  const mob = await getRandoMob(req.body)
  if(mob){
    res.json({msg:'got rando mob?', mob:mob})
    res.status(200)
    return
  }
  res.json({msg: 'sorry no mob, something went wrong'})
  res.status(401)
})


mobRouter.post('/get', validateSchema(mobNameSchema), async (req,res) => {
  const mob = await getMob(req.body)
  if(mob){
    res.json({msg:'got mob by beast name?', mob:mob})
    res.status(200)
    return
  }
  res.json({msg: 'sorry no mob, something went wrong'})
  res.status(401)
})

mobRouter.post('/new', validateSchema(mobSchema), async (req,res) => {
  const mob = await createMob(req.body)
  if(mob){
    res.json({msg:'got new mob?', mob:mob})
    res.status(200)
    return
  }
  res.json({msg: 'sorry no mob, something went wrong'})
  res.status(401)
})

module.exports = mobRouter