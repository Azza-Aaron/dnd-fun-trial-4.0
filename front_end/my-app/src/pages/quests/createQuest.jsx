import {BlogStyle} from "../../components/textInputs";

export const CreateQuest = ({setUpdate, update}) => {
  return(
    <BlogStyle header={'Quest Name'} body={'Quest Body'} reward={'Reward'} daysOrLength={'Est. Time'}
               associationsCharsEtc={'Associated Characters, Beasts and Places'} obstacles={'Obstacles'}
               additionalNotes={'Notes'} requirements={'Requirements to engage ie.level'} setUpdate={setUpdate} update={update}/>
  )
}

