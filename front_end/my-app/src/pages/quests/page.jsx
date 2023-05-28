
import {DmQuests} from "./dmQuests";

export const QuestPage = ({name, dm}) => {
  if(dm){
    return(
      <>
        <DmQuests name={name}/>
      </>
      )
  }
  return(
    <>
      <h1>quest here</h1>
    </>
  )
}