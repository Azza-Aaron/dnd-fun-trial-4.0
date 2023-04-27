const {insertAll} = require('../../model/')
const {selectOne} = require("../../model");

const checkIfExist = async (req) => {
  try{
    return await selectOne({image: req.body.image}, 'images')
  }catch (e) {
    console.log(e, 'couldnt check DB for some reason not sure if exists')
  }
}

const insertImage = async (req) => {
  const doesExist = await checkIfExist(req)
  if(doesExist){
    console.log('image name taken')
    return
  }
  try {
    return await insertAll(req.body, 'images')
  } catch (e) {
    console.log(e, 'image failed to insert')
  }
}

module.exports = {
  insertImage
}