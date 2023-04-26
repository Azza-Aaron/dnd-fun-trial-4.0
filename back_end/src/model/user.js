const {selectOne} = require("./")
const {insertAll} = require("./index");

const getUser = async (identifier) => {
  console.log('getting user.. ', identifier)
  return await selectOne(identifier, 'user')
}

const insertUser = async (user) => {
  console.log('inserting user..')
  return await insertAll(user, 'user')
}


// NO NEED TO ADD DELETE AT THIS POINT
/*const deleteOne = async (identifier) => {
  console.log('getting user..')
  return await getOne(identifier, 'user', 'delete')
}*/


module.exports = {
  getUser,
  insertUser
}