import {GeneralLayout} from "../../layouts/main";
import Container from "react-bootstrap/Container";

export const CharacterPage = ({name, dm}) => {

  if(dm){
    return (
      <h3>Some DM Character stuff here, probably viewing character sheets by group</h3>
    )
  }

  return(
    <Container>
      <GeneralLayout r1L={'Character A'} r1M={'Character B'} r1R={'Character C'}/>
    </Container>
  )
}