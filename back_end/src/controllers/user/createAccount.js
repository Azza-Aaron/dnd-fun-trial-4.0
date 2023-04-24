const {client} = require ('../../dataBase')
const {getUser, insertUser} = require('../../model/user.js')
const {saltHash} = require('../../utils/bcrypt/hashPassword.js')
const {setSession} = require('./validation')

const testEmail = async (email) => {
  const test = await client.query(getUser([email]))
  return !!test.rowCount;
}

const createUser = async (req, user) => {
  try {
    const hashedPassword = await saltHash(user.password)
    const id = await client.query(insertUser([user.username, user.email, hashedPassword]))
    const newUser = {name:user.username, id: id.rows[0].id}
    await setSession(req, newUser)
    return newUser
  } catch (e) {
    console.log(e, 'issue creating user')
    return false
  }
}

module.exports = {
  testEmail,
  createUser
}