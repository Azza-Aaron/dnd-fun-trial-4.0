const yup = require("yup");

const charSchema = yup.object({
  playerName: yup.string().required(),
  charName: yup.string().email().required(),
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

module.exports = {
  charSchema
}