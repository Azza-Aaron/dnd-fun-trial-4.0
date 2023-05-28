import { useNavigate} from "react-router-dom";
import {auth, authUser} from "../../services/util/authentication";
import {useEffect, useState} from "react";

export const Maps = () => {
  const [username, setUsername] = useState('')
  let isAuth = auth()
  const navigate = useNavigate()

  useEffect(() => {
    const myUser = authUser(isAuth, navigate)
    setUsername(myUser)
  }, [isAuth])
  return(
    <>
      <h1>map stuff here</h1>
    </>
  )
}