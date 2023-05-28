

export const loginOnDb = async (user) => {
  try{
    const get = await fetch('/api/user/login',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: user.email, password: user.password})
    })
    const data = await get.json()
    if(data.id){
      return data
    }
  } catch (e) {
    console.log(e, 'something went wrong')
    return false
  }
}