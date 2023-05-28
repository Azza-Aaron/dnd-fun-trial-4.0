
export const getByBeastName = async (text) => {
  try {
    const get = await fetch('/api/mob/get',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({beast:text})
    })
    const data = await get.json()
    if(data.msg === "request successful" && data?.data?.error !== 'Not found'){
      return {goodResponse: true, data}
    } else {
      console.log('something went wrong')
      return false
    }
  } catch (e) {
    console.log(e, 'server error contact admin')
    return false
  }
}

export const getByMobType = async (text) => {
  try {
    const get = await fetch('/api/mob/random/type',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({type:text})
    })
    const data = await get.json()
    if(data.msg === "request successful" && data?.data?.error !== 'Not found'){
      return {goodResponse: true, data}
    } else {
      console.log('something went wrong')
      return false
    }
  } catch (e) {
    console.log(e, 'server error contact admin')
    return false
  }
}

export const getAllTypes = async () => {
  try {
    const get = await fetch('/api/mob/types')
    const data = await get.json()
    if(data.msg === "request successful" && data?.data?.error !== 'Not found'){
      return {goodResponse: true, data}
    } else {
      console.log('something went wrong')
      return false
    }
  } catch (e) {
    console.log(e, 'server error contact admin')
    return false
  }
}

export const getAllMobs = async () => {

}