import {createQuestSchema} from "../../services/util/schemas";
import {sendNewQuest} from "../../api/quests";


export const testQuest = async (quest, setFormFilledIncorrectly, setUpdate, update) => {
  console.log(quest)
  try {
    await createQuestSchema.validate(quest)
  } catch (e) {
    setFormFilledIncorrectly(`Please fill all fields.. ${e}`)
    return
  }
  try{
    const questCreated = await sendNewQuest(quest)
    if(questCreated){
      setFormFilledIncorrectly('Quest Added')
      setUpdate(!update)
      console.log(update)
    } else {
      setFormFilledIncorrectly('Something Failed')
    }
  } catch (e) {
    setFormFilledIncorrectly(`Something Failed ${e}`)
  }
}