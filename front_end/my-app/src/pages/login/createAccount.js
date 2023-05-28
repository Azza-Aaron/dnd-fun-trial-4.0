import {validateCreateAccountWithYup} from "./validateNewAccount";
import {newAccountDb} from "../../api/addUser";


export const createNew = async (user, setMutedEmail, setMutedPassword, setMutedUsername, setUsername) => {
  try{
    const isValidSchema = await validateCreateAccountWithYup(user, setMutedEmail, setMutedPassword, setMutedUsername)
    if(isValidSchema){
      const newAccount = await newAccountDb(user)
      if(newAccount){
        sessionStorage.setItem("user", JSON.stringify(newAccount.name))
        sessionStorage.setItem("id", JSON.stringify(newAccount.id))
        sessionStorage.setItem("type", JSON.stringify('player'))
        setUsername(newAccount.name)
      }
    }
  } catch (e) {
    console.log(e)
  }
}