const bcrypt = require ('bcrypt')
const {setSession} = require("./validation");
const {client} = require("../../dataBase");
const {getUser} = require("../../model/user");

const login = async (req, user) => {
  try {
    const dbUser = await client.query(getUser([user.email]))
    const verified = await bcrypt.compare(user.password, dbUser.rows[0].password);
    if(verified){
      const myUser = {name: dbUser.rows[0].username, id: dbUser.rows[0].id}
      await setSession(req, myUser)
      return {name: dbUser.rows[0].username, id: dbUser.rows[0].id}
    }
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  login
}