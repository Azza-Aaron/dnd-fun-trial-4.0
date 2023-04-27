const yup = require("yup");


const mobSchema = yup.object({
  beast: yup.string().required(),
  description: yup.string().required(),
  health: yup.string().required(),
  damage: yup.string().required(),
  groupSize: yup.string().required(),
  type: yup.string().required(),
}).required().noUnknown(true)

const mobNameSchema = yup.object({
  beast: yup.string().required(),
}).required().noUnknown(true)

const mobTypeSchema = yup.object({
  type: yup.string().required(),
}).required().noUnknown(true)

module.exports = {
  mobSchema,
  mobNameSchema,
  mobTypeSchema
}