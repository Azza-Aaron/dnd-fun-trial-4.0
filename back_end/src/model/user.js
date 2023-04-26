const {selectOne} = require("./")
const {insertAll} = require("./index");

const getUser = (identifier) => {
  return {
    text: 'SELECT * from public.user WHERE email = $1::text',
    values: identifier
  }
}

const getUserFromId = (id) => {
  return {
    text: 'SELECT * from public.user WHERE id = $1::integer',
    values: id
  }
}


module.exports = {
  getUser,
  getUserFromId,
  insertUser
}