const express = require('express');
const userRouter = express.Router();
const {authGuard} = require("../../middleware/verification.js");
const {validateSchema} = require("../../middleware/schemaValidation")
const {userSchema, loginSchema} = require("./validation");
const {doesEmailExist, createUser} = require("./createAccount");
const {login} = require("./login");


userRouter.post('/create', validateSchema(userSchema), async (req,res) => {
  if(await doesEmailExist(req.body)){
    res.json({msg: "User already exists, contact admin."})
    res.status(401)
    return
  }
  const user = await createUser(req, req.body)
  if(user){
    res.json({msg:'Welcome ', name:user.name, id:user.id})
    res.status(200)
    return
  }
  res.json({msg:'something went wrong, try again later'})
  res.status(401)
})

userRouter.post('/login', validateSchema(loginSchema), async (req,res) => {
  console.log(req.body)
  const user = await login(req, req.body)
  if(user){
    res.json({msg:'Welcome ', name:user.name, id:user.id})
    res.status(200)
    return
  }
  res.json({msg:'wrong password or email, please try again'})
  res.status(401)
})

userRouter.use(authGuard)

/*userRouter.put('/update', async (req,res) => {
  res.json({msg:'update not active yet'})
  res.status(500)
})*/


userRouter.get('/logout', async (req,res) => {
  try {
    await req.session.destroy()
    res.json({msg:'logged out'})
    res.status(200)
    return
  } catch (e) {
    console.log(e, 'user is still logged in')
  }
  res.json({msg:'something went wrong'})
  res.status(401)
})

/*userRouter.delete('/delete', async (req,res) => {
  res.json({msg:'update not active yet'})
  res.status(500)
})*/

module.exports = userRouter