import {CommonCardWithATag} from "../../components/card/common";
import {
  bestiaryTextForHome,
  characterTextForHome,
  dataBankBodyTextForHome,
  inventoryTextForHome,
  lookUpBodyTextForHome,
  profileBodyTextForHome, questTextForHome, rulesTextForHome, shopTextForHome
} from "./cardText";
import {GeneralLayout} from "../../layouts/main";
import {useEffect, useState} from "react";

export const HomePage = ({name, mode, authed}) => {

  const [userMode, setUserMode] = useState('')
  const visitor = name ? name : 'Wretch'

  useEffect(() => {
    if(authed){
      if(mode){
        setUserMode(' DM')
      } else {
        setUserMode(' Player')
      }
    }
  }, [mode])


  return(
    <>
      <GeneralLayout
        r1M={<>
          <h3 style={{textAlign: 'center'}} >Welcome {visitor}</h3>
          <br></br>
          <h3 style={{textAlign: 'center'}}>{userMode}</h3>
        </>}
        r2L={<CommonCardWithATag
          featured={'Inventory'} title = 'Character Inventory' body = {inventoryTextForHome} myUrl = '/inventory' mutedText = 'Please' />}
        r2M={<CommonCardWithATag
          featured={'Characters'} title = 'My Character' body = {characterTextForHome} myUrl = '/character' mutedText = 'Touch me' />}
        r2R={<CommonCardWithATag
          featured={'Shop'} title = 'Buy Items' body = {shopTextForHome} myUrl = '/shop' mutedText = 'Anywhere' />}
        r3L={<CommonCardWithATag
          featured={'Lookup'} title = 'Search by Lookup' body = {lookUpBodyTextForHome} myUrl = '/lookup' mutedText = 'Please' />}
        r3M={<CommonCardWithATag
          featured={'Data'} title = 'Data Bank' body = {dataBankBodyTextForHome} myUrl = '/data/bank' mutedText = 'Touch me' />}
        r3R={<CommonCardWithATag
          featured={'Profile'} title = 'My Profile' body = {profileBodyTextForHome} myUrl = '/profile' mutedText = 'Anywhere' />}
        r4L={<CommonCardWithATag
          featured={'Quests'} title = 'My Journal' body = {questTextForHome} myUrl = '/quests' mutedText = 'Please' />}
        r4M={<CommonCardWithATag
          featured={'Rules'} title = 'The Rules' body = {rulesTextForHome} myUrl = '/rules' mutedText = 'Touch me' />}
        r4R={<CommonCardWithATag
          featured={'Bestiary'} title = 'Our Monsters' body = {bestiaryTextForHome} myUrl = '/bestiary' mutedText = 'Anywhere' />}/>
    </>
  )
}