import {useEffect, useState} from "react";
import {CreateQuest} from "./createQuest";
import Button from "react-bootstrap/Button";
import {getAllQuests} from "./getAllQuests";
import {GeneralLayout} from "../../layouts/main";
import {mapAllQuests} from "./mapAllQuests";

export const DmQuests = ({name}) => {
  const [addPost, setAddPost] = useState(false)
  const [allQuests, setAllQuests] = useState([])
  const [update, setUpdate] = useState(false)
  const [questFields] = useState({})

  useEffect(() => {
    getAllQuests(setAllQuests)
  }, [update])

  const hideAddQuest = <Button onClick={() => {setAddPost(false)}} variant={"info"} className={'mt-3'}>Hide</Button>
  const addQuestButton = <Button onClick={() => setAddPost(true)} variant={"info"} className={'mt-3'}> Add Quest</Button>

  if (allQuests) {
    const mappedQuests = mapAllQuests(allQuests, questFields, setUpdate, update)
    return (
      <GeneralLayout
        r1M={<h2 style={{textAlign:'center'}}>Quests</h2>}
        r2L={
        <>
          {!addPost ? addQuestButton : hideAddQuest}
          {addPost ? <CreateQuest setUpdate={setUpdate} update={update} /> : null}
        </>
      } r2M={<>{mappedQuests}</>} r2R={'Journal Entry'}/>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}