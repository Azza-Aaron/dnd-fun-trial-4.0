const {client} = require ('../../dataBase')
const {insertCharacter} = require("../../model/character");


const createChar = async (c, req) => {
    try{
      const char = [c.charName, c.playerName, c.alignment, c.race, c.age, c.height, c.weight, c.eyes, c.skin, c.hair,
        c.background, c.class, c.about, c.personalityTraits, c.ideals, c.bonds, c.flaws, c.alliesOrganisations,
        c.backstory, c.additional_information, req.session.user.id]
      const newChar =  await client.query(insertCharacter(char))
      return newChar.rows[0]
    } catch (e) {
      console.log(e)
      console.log('something went wrong add character to DB')
      return false
    }
}

module.exports = {
  createChar
}