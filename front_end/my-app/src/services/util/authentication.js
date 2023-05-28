export const auth = () => {
  return !!sessionStorage.getItem("user");
}

export const authUser = (isAuth, navigate) => {
  if(isAuth){
    const user = sessionStorage.getItem('user')
    return JSON.parse(user)
  } else {
    navigate("/login")
  }
}