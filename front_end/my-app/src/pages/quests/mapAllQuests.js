import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import {updateEditedQuest} from "./updateQuest";

export const mapAllQuests = (allQuests, questFields, setUpdate, update) => {
  console.log(allQuests)
  if(allQuests?.[0]?.id){
    return allQuests.map((quest) => {
      console.log(quest.notes)
      const {
        id,
        notes,
        questBody,
        questCharacters,
        questHeader,
        questLength,
        questObstacles,
        questRequirements,
        questReward
      }= quest
      return(
        <CardGroup className={"mt-3"}>
          <Card contentEditable={'true'}>
            <Card.Header>
              <h3 id={`${id}-questH-el`}>{questHeader}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p id={`${id}-questB-el`}>{questBody}</p>
              </Card.Text>
            </Card.Body>
            <Card.Header>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <h6>Characters:</h6>
                <p id={`${id}-questC-el`}>{questCharacters}</p>
                <h6>Notes:</h6>
                <p id={`${id}-questN-el`}>{notes}</p>
                <h6>Obstacles</h6>
                <p id={`${id}-questO-el`}>{questObstacles}</p>
                <h6>Rewards</h6>
                <p id={`${id}-questRew-el`}>{questReward}</p>
                <h6>Length</h6>
                <p id={`${id}-questL-el`}>{questLength}</p>
                <h6>Requirements</h6>
                <p id={`${id}-questReq-el`}>{questRequirements}</p>
              </Card.Text>
              <ButtonGroup style={{display: "flex", justifyContent: "center",}}>
                <Button id={id} variant={'info'} onClick={
                  (e) => {
                    const id = e.target.id
                    const updatedQuest = {
                      id: +id,
                      questHeader: document.getElementById(`${id}-questH-el`).innerText,
                      questBody: document.getElementById(`${id}-questB-el`).innerText,
                      questCharacters: document.getElementById(`${id}-questC-el`).innerText,
                      notes: document.getElementById(`${id}-questN-el`).innerText,
                      questLength: document.getElementById(`${id}-questL-el`).innerText,
                      questObstacles: document.getElementById(`${id}-questO-el`).innerText,
                      questRequirements: document.getElementById(`${id}-questReq-el`).innerText,
                      questReward: document.getElementById(`${id}-questRew-el`).innerText
                    }
                    updateEditedQuest(updatedQuest, setUpdate, update)
                  }
                }>Save Edit</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </CardGroup>
      )
    })
  } else {
    return(<p>{allQuests[0]}</p>)
  }
}