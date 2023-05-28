import { useNavigate} from "react-router-dom";
import {useEffect} from "react";

function NotFound(){
  const navigate = useNavigate()

  useEffect( () => {
    setTimeout( () => {
      navigate("/login")
    }, 2000)
  })
  return<h1>Unauthorized Access Please Login</h1>
}
export {NotFound}