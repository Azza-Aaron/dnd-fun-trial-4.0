

export const logoutFromServer = async () => {
  try{
    const logout = await fetch('/api/user/logout')
    const res = await logout.json()
    if (res.msg === 'logged out'){
      return true
    }
  } catch (e) {
    console.log(e, 'something went wrong')
    return false
  }
  return false
}