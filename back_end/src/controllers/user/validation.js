const yup = require("yup");

const userSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
}).required().noUnknown(true);

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
}).required().noUnknown(true);


const setSession = async (req, user) => {
  console.log('user ', user)
  req.session.user = {
    name: user.username,
    id: user.id,
    verified: true
  }
}

module.exports = {
  setSession,
  userSchema,
  loginSchema
}