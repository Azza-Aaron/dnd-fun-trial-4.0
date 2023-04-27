const {selectAll} = require("../../model");


const getAllImages = async (req) => {
  try{
    return await selectAll({type: req.query}, 'images')
  } catch (e) {
    console.log(e, 'something went astray collecting images from DB')
  }
}

module.exports = {
  getAllImages
}