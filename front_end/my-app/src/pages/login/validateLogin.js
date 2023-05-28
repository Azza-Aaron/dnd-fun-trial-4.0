import {userEmailSchema, userPasswordSchema} from "../../services/util/schemas";
import {loginOnDb} from "../../api/validateUser";


export const validateWithYup = async (setMutedEmail, setMutedPassword, user) => {
  const email = {email: user.email}
  const password = {password: user.password}
  try{
    await userEmailSchema.validate(email)
  } catch (e) {
    setMutedEmail(`${e}`)
    return false
  }
  try {
    await userPasswordSchema.validate(password)
  } catch (e) {
    setMutedEmail("We'll never share your email with anyone else.")
    setMutedPassword(`${e}`)
    return false
  }
  setMutedPassword(``)
  return true
}

export const validateUser = async (setMutedEmail, setMutedPassword, user) => {
  const validUser = await loginOnDb(user)
  if (validUser){
    return validUser
  } else{
    setMutedEmail('Invalid user, check details or contact admin')
    setMutedPassword('Invalid user, check details or contact admin')
  }
    //must return an object with a username and an id
}