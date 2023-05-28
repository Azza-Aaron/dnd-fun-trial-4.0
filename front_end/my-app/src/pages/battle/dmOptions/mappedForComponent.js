import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {forEach} from "react-bootstrap/ElementChildren";


export const mapTypes = (mobTypes) => {
  return mobTypes.map((type) => {
    return <li>{type.type}</li>
  })
}

export const mapMonsters = (mobInfo, setMobInfo) => {

  const killBeast = (id) => {
    const filteredBeasts = mobInfo.filter((beast) => id !== beast.index.toString())
    setMobInfo(filteredBeasts)
  }

  const damageBeast = (dmg, id) => {
    let hp
    const newList = mobInfo
    newList.forEach((beast) => {
      if(id === beast.index.toString()){
        beast.health = +beast.health - dmg
        hp = +beast.health
      }
    })
    console.log('mob info after edit ', newList)
    if(hp <= 0){
      killBeast(id)
      return
    }
    setMobInfo([...newList])
  }

  if(!mobInfo[0]){
    return null
  }

  if(mobInfo[0].beast) {
    console.log('before beast mapping', mobInfo)

    return mobInfo.map((beast, index) => {
      return (
        <ListGroupItem key={index.toString()}>
          <ListGroup.Item>{beast.beast}</ListGroup.Item>
          <ListGroup.Item>Damage: {beast.damage}</ListGroup.Item>
          <ListGroup.Item>Health: {beast.health}</ListGroup.Item>
          <input type="text" placeholder={'enter damage'} id={beast.index.toString()} onKeyUp={(e) => {
            if (e.key === 'Enter') {
              if (!isNaN(e.target.value))
                console.log(+e.target.value)
              damageBeast(+e.target.value, e.target.id)
            }
          }}/>
          {beast.description ?
            <ListGroup.Item id={index.toString()}>Description: {beast.description}</ListGroup.Item> : null}
          <ListGroup.Item id={beast.index.toString()} onClick={(e) => {
            killBeast(e.target.id)
          }}>Kill</ListGroup.Item>
        </ListGroupItem>
      )
    })
  }

  const somethingWrong = mobInfo[0]
  return <p>{somethingWrong}</p>
}