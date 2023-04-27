const {selectOne} = require("../../model");

const getImage = async (image) => {
  try{
    return await selectOne({image: image.image}, 'images')
  }catch (e) {
    console.log(e, 'couldnt check DB for some reason not sure if exists')
  }
}


module.exports = {
  getImage
}