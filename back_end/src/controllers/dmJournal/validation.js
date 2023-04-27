const yup = require("yup");

const dmJournalEntry = yup.object({
  header: yup.string().required(),
  body: yup.string().required(),
  associations: yup.string().required(),
  groupName: yup.string().required(),
  notes: yup.string().required(),
}).required().noUnknown(true)

const dmJournalEdit = yup.object({
  id: yup.number().required(),
  header: yup.string().required(),
  body: yup.string().required(),
  associations: yup.string().required(),
  groupName: yup.string().required(),
  notes: yup.string().required(),
}).required().noUnknown(true)

const deleteDmJournalEntrySchema = yup.object({
  id: yup.number(),
  password: yup.string()
}).required().noUnknown(true);

module.exports = {
  dmJournalEntry,
  dmJournalEdit,
  deleteDmJournalEntrySchema
}