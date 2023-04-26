const yup = require("yup");

const createQuestSchema = yup.object({
  questHeader: yup.string().required(),
  questBody: yup.string().required(),
  questReward: yup.string().required(),
  questLength: yup.string().required(),
  questCharacters: yup.string().required(),
  notes: yup.string().required(),
  questObstacles: yup.string().required(),
  questRequirements: yup.string().required(),
}).required().noUnknown(true)

const updateQuestSchema = yup.object({
  questHeader: yup.string().required(),
  questBody: yup.string().required(),
  questReward: yup.string().required(),
  questLength: yup.string().required(),
  questCharacters: yup.string().required(),
  notes: yup.string().required(),
  questObstacles: yup.string().required(),
  questRequirements: yup.string().required(),
  id: yup.number().required()
}).required().noUnknown(true)

module.exports = {
  createQuestSchema,
  updateQuestSchema
}