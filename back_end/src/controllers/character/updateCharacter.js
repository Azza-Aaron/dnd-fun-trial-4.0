const {client} = require("../../dataBase");
const {updateCharacter} = require("../../model/character");


const updateChar = async (c, req) => {
  console.log('this is c ', c)
  try{
    const char = [c.charName, c.playerName, c.alignment, c.race, c.age, c.height, c.weight, c.eyes, c.skin, c.hair,
      c.background, c.class, c.about, c.personalityTraits, c.ideals, c.bonds, c.flaws, c.alliesOrganisations,
      c.backstory, c.additional_information, c.charId, req.session.user.id]
    const updatedChar =  await client.query(updateCharacter(char))
    return updatedChar.rows[0]
  } catch (e) {
    console.log(e)
    console.log('couldnt update char in DB')
    return false
  }
}

module.exports = {
  updateChar
}