const yup = require("yup");

const charSchema = yup.object({
  playerName: yup.string().required(),
  characterName: yup.string().required(),
  alignment: yup.string().required(),
  race: yup.string().required(),
  age: yup.string(),
  height: yup.string(),
  weight: yup.string(),
  eyes: yup.string(),
  skin: yup.string(),
  hair: yup.string(),
  background: yup.string().required(),
  class: yup.string().required(),
  about: yup.string(),
  personalityTraits: yup.string().required(),
  ideals: yup.string().required(),
  bonds: yup.string().required(),
  flaws: yup.string().required(),
  alliesOrganisations: yup.string(),
  backstory: yup.string(),
  additionInformation: yup.string()
}).required().noUnknown(true);

const updateCharSchema = yup.object({
  playerName: yup.string(),
  characterName: yup.string(),
  alignment: yup.string(),
  race: yup.string(),
  age: yup.number(),
  height: yup.string(),
  weight: yup.string(),
  eyes: yup.string(),
  skin: yup.string(),
  hair: yup.string(),
  background: yup.string(),
  class: yup.string(),
  about: yup.string(),
  personalityTraits: yup.string(),
  ideals: yup.string(),
  bonds: yup.string(),
  flaws: yup.string(),
  alliesOrganisations: yup.string(),
  backstory: yup.string(),
  additionInformation: yup.string(),
  charId: yup.number()
}).required().noUnknown(true);

const deleteCharSchema = yup.object({
  id: yup.number(),
  password: yup.string()
}).required().noUnknown(true);

module.exports = {
  charSchema,
  updateCharSchema,
  deleteCharSchema
}