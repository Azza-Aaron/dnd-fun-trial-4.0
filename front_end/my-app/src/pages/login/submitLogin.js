import {validateUser, validateWithYup} from "./validateLogin";

export const submitLogin = async (loginUser, setMutedEmail, setMutedPassword, setUsername) => {
  console.log(loginUser, 'first call from submit func')
  const goodFormat = await validateWithYup(setMutedEmail, setMutedPassword, loginUser)
  if(!goodFormat){
    return
  }
  const isValid = await validateUser(setMutedEmail, setMutedPassword, loginUser)
  if (isValid){
    console.log('is valid sets is ', isValid.name, isValid.id)
    sessionStorage.setItem("user", JSON.stringify(isValid.name))
    sessionStorage.setItem("id", JSON.stringify(isValid.id))
    sessionStorage.setItem("type", JSON.stringify('player'))
    setUsername(isValid.name)
  }
}