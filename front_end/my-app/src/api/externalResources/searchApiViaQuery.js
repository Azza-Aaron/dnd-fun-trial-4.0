

export const searchApiWithText = async (text) => {
  console.log('server requesting, ', text)
  try {
    const get = await fetch(`/api/info?request=/api/${text}`)
    const data = await get.json()
    //console.log('data from server ', data)
    if(data.msg === "request successful" && data.data.error !== 'Not found'){
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