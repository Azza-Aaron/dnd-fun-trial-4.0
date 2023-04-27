const {selectOne} = require("../../model");

const getMob = async (beast) => {
  try{
    return await selectOne({beast: beast.beast}, 'beast_mob')
  }catch (e) {
    console.log(e, 'couldnt check DB for some reason not sure if exists')
  }
}

module.exports = {
  getMob
}