import Button from "react-bootstrap/Button";
import {MiddleLayout} from "../../layouts/forms";
import {useNavigate} from "react-router-dom";
import {logoutFromServer} from "../../api/logoutUser";
import {useEffect, useState} from "react";

const cleanUp = async (navigate) => {
  const logout = await logoutFromServer()
  if (logout){
    sessionStorage.clear()
    navigate('/')
  }
}

export const Logout = ({username}) => {
  return(
    <>
      <MiddleLayout firstHeader={`Hi ${username.charAt(0).toUpperCase()}${username.substring(1)}`}
                    r1M={<LogOutInformation />}/>
    </>
  )
}

export const LogOutInformation = () => {
  const navigate = useNavigate()
  return(
    <>
      <p>Would you like to logout?</p> <Button
      onClick={() => {
        cleanUp(navigate)
    }}>Logout</Button>
    </>
  )
}