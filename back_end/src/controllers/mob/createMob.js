const {insertAll, selectOne} = require("../../model");

const checkIfExists = async (beast) => {
  try{
    return await selectOne({beast}, 'beast_mob')
  }catch (e) {
    console.log(e, 'couldnt check DB for some reason not sure if exists')
  }
}


const createMob = async (beast) => {
  const doesExist = await checkIfExists(beast.beast)
  if(doesExist){
    console.log('beast exists, try edit?')
    return
  }
  try {
    console.log('inserting..', beast)
    return await insertAll(beast, 'beast_mob')
  } catch (e) {
    console.log(e, 'image failed to insert')
  }
}


module.exports = {
  createMob
}