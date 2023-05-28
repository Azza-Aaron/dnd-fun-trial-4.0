

export const getQuestsFromServer = async () => {
  try {
    const get = await fetch('/api/quest/all')
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

export const sendNewQuest = async (quest) => {
  try{
    const sent = await fetch('/api/quest/new',  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...quest})
    })
    const data = await sent.json()
    if(data.msg === "request successful" && data?.data?.error !== 'Not found'){
      return {goodResponse: true, data}
    } else {
      console.log('something went wrong')
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}

export const updateQuestOnServer = async (quest) => {
  console.log('here',quest)
  try{
    const sent = await fetch('/api/quest/update',  {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...quest})
    })
    const data = await sent.json()
    if(data.msg === "request successful" && data?.data?.error !== 'Not found'){
      return {goodResponse: true, data}
    } else {
      console.log('something went wrong')
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}