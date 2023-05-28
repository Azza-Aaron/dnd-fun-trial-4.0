import {GeneralLayout} from "../../../layouts/main";
import {SummonMob} from "./summonMob";
import {useEffect, useState} from "react";
import {getMobTypes} from "./makeMobCallToServer";
import {mapMonsters, mapTypes} from "./mappedForComponent";
import ListGroup from "react-bootstrap/ListGroup";

export const DmBattle = ({name}) => {
  const [mobInfo, setMobInfo] = useState([])
  const [mobTypes, setMobTypes] = useState([])

  useEffect(() => {
    getMobTypes(setMobTypes)
  }, [])


  let monstersLeft = 0
  const mobType = mapTypes(mobTypes)
  const mobMonsters = mapMonsters(mobInfo, setMobInfo)

  return(
    <GeneralLayout
      r1M={`${name}'s, DM Battle Chest`}
      r2L={<SummonMob setMobInfo={setMobInfo} />} r2M={"main creature details"} r2R={"Initiative"}
      r3L={<ListGroup id={'full-mob-list-el'}> {mobMonsters} </ListGroup>} r3M={"Details Here"} r3R={"highlighted player"}
      r4L={<></>} r4M={"roll Dice"}  r4R={"timer"}
      r5L={<><div>Available Types</div><ul> {mobType} </ul></>}/>
  )
}