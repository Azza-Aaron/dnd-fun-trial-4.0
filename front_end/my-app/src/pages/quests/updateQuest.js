import {updateQuestSchema} from "../../services/util/schemas";
import {sendNewQuest, updateQuestOnServer} from "../../api/quests";


export const updateEditedQuest = async (quest, setUpdate, update) => {
  try {
    await updateQuestSchema.validate(quest)

  } catch (e) {
    console.log('missing fields', e)
    return
  }
  try {
    const updatedQuest = await updateQuestOnServer(quest)
    if(updatedQuest){
      setUpdate(!update)
      console.log(update)
    } else {
      console.log('problem updating on server')
    }
  } catch (e) {
    console.log('couldnt update on server ', e)
  }
}