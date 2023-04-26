const bcrypt = require ('bcrypt')
const {setSession} = require("./validation");
const {getUser} = require("../../model/user");

const login = async (req, user) => {
  try {
    const dbUser = await getUser({email: req.body.email})
    const verified = await bcrypt.compare(user.password, dbUser.password);
    if(verified){
      const myUser = {name: dbUser.username, id: dbUser.id}
      await setSession(req, myUser)
      return {name: dbUser.username, id: dbUser.id}
    }
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  login
}