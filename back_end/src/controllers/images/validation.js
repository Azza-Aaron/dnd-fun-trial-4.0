const yup = require("yup");


const imageSchema = yup.object({
  image: yup.string().required(),
  type: yup.string().required(),
}).required().noUnknown(true)

module.exports = {
  imageSchema
}