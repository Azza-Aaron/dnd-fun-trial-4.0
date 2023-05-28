
export const username = (authed) => {
  if(authed){
    const username = JSON.parse(sessionStorage.getItem('user'))
    return username.charAt(0).toUpperCase() + username.substring(1)
  }
  return false
}

export const playerDm = (setMode, mode) => {
  if(sessionStorage.getItem('type') === 'dm'){
    if(!mode){
      setMode(true)
    }
    return true
  }
}