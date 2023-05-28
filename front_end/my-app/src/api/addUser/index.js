


export const newAccountDb = async (user) => {
  try {
    const get = await fetch('/api/user/create',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: user.username, email: user.email, password: user.password})
    })
    const data = await get.json()
    if(data.msg === "Welcome "){
      return {name: data.name, id:data.id}
    } else {
      console.log('failed to log in')
      return false
    }
  } catch (e) {
    console.log(e, 'server error contact admin')
    return false
  }
}