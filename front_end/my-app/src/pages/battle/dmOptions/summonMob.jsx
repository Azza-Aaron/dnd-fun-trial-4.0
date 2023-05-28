import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {makeMobCallToServer} from "./makeMobCallToServer";
import {useState} from "react";


export const SummonMob = ({setMobInfo}) => {
  const [inputVal, setInputVal] = useState('')

  const generateMob = async () => {
    if(inputVal){
      const getMob = await makeMobCallToServer(inputVal)
      if(getMob){
        console.log('got mob from get mob', getMob)
        setMobInfo(getMob)
      } else {
        setMobInfo(['Try a different spelling, or a type from the below list.'])
      }
    }
  }

  const killAll = () => {
    setMobInfo(['Mob Destroyed'])
  }

  return(
    <Card>
      <Card.Header>Summon Mob</Card.Header>
      <Card.Body>
        <input onChange={(e) => {setInputVal(e.target.value)}} placeholder={"Enter Type or Name"}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            generateMob()
          }
        }}/>
        <ButtonGroup>
          <Button onClick={() => {
            generateMob()
          }}>Summon</Button>
          <Button onClick={killAll}>KillAll</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}