import { useNavigate} from "react-router-dom";
import {auth, authUser} from "../../services/util/authentication";
import {useEffect, useState} from "react";

export const InventoryPage = () => {
  const [username, setUsername] = useState('')
  let isAuth = auth()
  const navigate = useNavigate()

  useEffect(() => {
    const myUser = authUser(isAuth, navigate)
    setUsername(myUser)
  }, [isAuth])

  return(
    <>
      <p>invent</p>
    </>
  )
}