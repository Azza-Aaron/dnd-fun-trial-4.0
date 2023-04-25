const yup = require("yup");

const charSchema = yup.object({
  playerName: yup.string().required(),
  charName: yup.string().required(),
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
  additional_information: yup.string()
});

const updateCharSchema = yup.object({
  playerName: yup.string(),
  charName: yup.string(),
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
  additional_information: yup.string(),
  charId: yup.number()
});

const deleteCharSchema = yup.object({
  charId: yup.number(),
  password: yup.string()
})

module.exports = {
  charSchema,
  updateCharSchema,
  deleteCharSchema
}