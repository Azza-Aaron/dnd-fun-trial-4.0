import {userEmailSchema, userPasswordSchema, userNameSchema} from "../../services/util/schemas";


export const validateCreateAccountWithYup = async (user, setMutedEmail, setMutedPassword, setMutedUsername) => {
  console.log(user)
  const username = {username: user.username}
  const email = {email: user.email}
  const password = {password: user.password}
  try{
    await userNameSchema.validate(username)
  } catch (e) {
    setMutedUsername(`${e}`)
    return false
  }
  try{
    await userEmailSchema.validate(email)
    setMutedUsername('')
  } catch (e) {
    setMutedUsername('')
    setMutedEmail(`${e}`)
    return false
  }
  try {
    await userPasswordSchema.validate(password)
  } catch (e) {
    setMutedUsername('')
    setMutedEmail("We'll never share your email with anyone else.")
    setMutedPassword(`${e}`)
    return false
  }
  setMutedPassword(``)
  return true
}