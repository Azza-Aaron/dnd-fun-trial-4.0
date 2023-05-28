import {DmJournal} from "./dm";
import {CharJournal} from "./character";


export const MyJournal = ({dm, name}) => {
  if(dm){
    return(
      <DmJournal />
    )
  }
  return (
    <CharJournal />
  )
}