const {insertUser} = require('../../model/user.js')
const {saltHash} = require('../../utils/bcrypt/hashPassword.js')
const {setSession} = require('./validation')
const {selectOne} = require('../../model/')

const doesEmailExist = async (email) => {
  console.log('checking email.. ', email)
  const emailExists = await selectOne({email: email.email}, 'user')
  return !!emailExists
}

const createUser = async (req, user) => {
  try {
    const hashedPassword = await saltHash(user.password)
    const id = await insertUser({...user, password: hashedPassword});
    const newUser = {name:user.username, id: id.id}
    await setSession(req, newUser)
    return newUser
  } catch (e) {
    console.log(e, 'issue creating user')
    return false
  }
}

module.exports = {
  doesEmailExist,
  createUser
}