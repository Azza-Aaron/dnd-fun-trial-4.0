import {MiddleLayout} from "../../layouts/forms";
import {LoginForm} from "../../components/form/login";
import {CreateAccountForm} from "../../components/form/createAccount";
import Container from "react-bootstrap/Container";
import {auth} from "../../services/util/authentication";
import {useEffect, useState} from "react";
import {Logout} from "./logout";

export const Login = () => {
  const [username, setUsername] = useState('')

  let isAuth = auth()

  useEffect(() => {
    if(isAuth){
      const thisUser = sessionStorage.getItem('user')
      const myUser = JSON.parse(thisUser)
      setUsername(myUser)
    }
  }, [isAuth])

  if(username){
    return <Logout username={username}/>
  }

  return(
    <Container>
      <MiddleLayout
        firstHeader={'Login'} r1M={
        <LoginForm setUsername={setUsername}/>}
        r2M={<CreateAccountForm setUsername={setUsername}/>} secondHeader={'Create Account'}/>
    </Container>
  )
}