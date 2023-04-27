const express = require('express');
const imageRouter = express.Router();
const {getImage} = require ('./getOne')
const {getAllImages} = require (`./getAll`)
const {validateSchema} = require("../../middleware/schemaValidation");
const {imageSchema} = require("./validation");
const {insertImage} = require("./insertOne.js")

imageRouter.get('/all/type', async (req,res) => {
  const images = await getAllImages(req)
  if(images){
    res.json({msg: `all images of type ${req.query}`, images: images} )
    res.status(200)
    return
  }
  console.log('something went wrong')
  res.json({msg: 'failed to supply all images try a different type'})
  res.status(401)
})

imageRouter.get('/one', async (req,res) => {
    const bgImage = await getImage(req.query)
  console.log(bgImage)
    if(bgImage){
      res.json({msg: 'image found', image: bgImage})
      res.status(200)
      return
    }
  console.log('something went wrong')
  res.json({msg: 'failed to find image, check query param are similar to ?image=${imageName}'})
  res.status(401)
})

imageRouter.post('/new', validateSchema(imageSchema), async (req,res) => {
  const newImage = await insertImage(req)
  if(newImage){
    res.json({msg: `image added`, image: newImage.image, type: newImage.type} )
    res.status(200)
    return
  }
  console.log('something went wrong')
  res.json({msg: 'failed to add image'})
  res.status(401)
})


module.exports = imageRouter