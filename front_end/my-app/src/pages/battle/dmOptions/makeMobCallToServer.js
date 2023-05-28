import {getAllTypes, getByBeastName, getByMobType} from "../../../api/generateMoborMonster/indexMob";


export const makeMobCallToServer = async (input) => {
  const beastByName = await getByBeastName(input)
  if(beastByName && beastByName.goodResponse){
    return beastByName.data.mob
  }
  const beastByType = await getByMobType(input)
  if(beastByType && beastByType.goodResponse){
    return beastByType.data.mob
  }
}

export const getMobTypes = async (setMobInfo) => {
  const types = await getAllTypes()
  if(types && types.goodResponse)
  setMobInfo(types.data.types)
}