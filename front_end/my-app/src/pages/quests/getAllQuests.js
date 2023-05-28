import {getByBeastName} from "../../api/generateMoborMonster/indexMob";
import {getQuestsFromServer} from "../../api/quests";


export const getAllQuests = async (setAllQuests) => {
  const quests = await getQuestsFromServer()
  if(quests && quests.goodResponse){
    setAllQuests(quests.data.quests)
    return
  }
  setAllQuests(['No Quests Yet, Add Some Quests Before Starting Your Adventure'])
}