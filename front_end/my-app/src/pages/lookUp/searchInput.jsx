import {useState} from "react";
import {DebouncedInput} from "./debouncedInput";
import {mapFinalOutputForApiSearch} from "./mapFinalOutput";
import Card from 'react-bootstrap/Card';

export const SearchApiInput = () => {
  const [list, setList] = useState([''])
  let display

  if(list[0]){
    display = mapFinalOutputForApiSearch(list, setList)
  }

  return(
    <div style={{textAlign: "center"}}>

      <DebouncedInput setList={setList}/>

      <br></br>
      {
        list[0] ? <ul style={{textAlign: "center"}} id={'search-list-el'}>
          <Card style={{ width: '32rem' }}> <Card.Body>  {display} </Card.Body> </Card>
        </ul> : <p style={{textAlign: "center"}}>Your search results will appear here.</p>
      }

    </div>
  )
}