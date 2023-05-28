import {DmBattle} from "./dmOptions/dm";
import {PlayaBattle} from "./playerOptions/playa";

export const BattlePage = ({name, dm}) => {
  if(dm){
    return (
      <DmBattle name={name} />
    )
  }
  return(
    <PlayaBattle name={name}/>
  )
}