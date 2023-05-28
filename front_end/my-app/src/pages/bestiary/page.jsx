import { useNavigate} from "react-router-dom";
import {auth, authUser} from "../../services/util/authentication";
import {useEffect, useState} from "react";

export const BestiaryPage = ({name, dm}) => {
  return(
    <>
      <h1>beasts here {name}</h1>
    </>
  )
}