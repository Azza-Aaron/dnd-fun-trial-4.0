import {getResult} from "./getResult";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export const mapFinalOutputForApiSearch = (list, setList) => {

  if(!list[1]){
    return (
      <Card.Text>
        {list[0]}. Try spells or races etc.
      </Card.Text>
    )
  }
  return list.map((line) => {


    if(line?.header){
      if(isNaN(line.header)){
        console.log('nan headers', line)
        return(
            <h6>{line.header.charAt(0).toUpperCase() + line.header.slice(1)}</h6>
        )
      }
      return
    }

    if(line?.body?.includes("/api/")){
      const url = line.body.replace('/api/', '')
      return (
        <Button variant="secondary" onClick={() => {
          document.getElementById('debounce-search-inp-el').value = url
          getResult(url, setList)
        }}>Show More Information</Button>
      )
    }

    if(line.name === 'index' || line.name === 'count' || !line.body){
      return null
    }

    return (
          <Card.Body>
            { line.name !== 'name'  ? <Card.Subtitle
              className="mb-2 text-muted">{line.name.charAt(0).toUpperCase() + line.name.slice(1)}</Card.Subtitle> : null}
            <Card.Text>
              {line.body}
            </Card.Text>
          </Card.Body>
        )
  })
}

/*
return list.map((item) => {
  let title
  let body
  let url
  if(item.includes(';')){
    const split = item.toString().split(';')
    body = split
    title = split[0]
    url = split[split.length -1]
    if(split[1].includes('api')){
      title = false
    }
    if(!url.includes('api')){
      url = false
    }
    if(url){
      url = url.replaceAll('/api/', '')
    }
  }
  if(title && url){
    return(
      <Card style={{ width: '32rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
          <Card.Text>
            {body[1]}
          </Card.Text>
          <Button variant="secondary" onClick={() => {
            document.getElementById('debounce-search-inp-el').value = url
            getResult(url, setList)
          }}>Show More Information</Button>
        </Card.Body>
      </Card>
    )
  }
  if(url){
    return(
      <Card style={{ width: '32rem' }}>
        <Card.Body>
          <Card.Text>
            {body[0]}
          </Card.Text>
          <Button variant="secondary" onClick={() => {
            document.getElementById('debounce-search-inp-el').value = url
            getResult(url, setList)
          }}>Show More Information</Button>
        </Card.Body>
      </Card>
    )
  }
  if(title){
    if(body[1] === " undefined" || !body[1]){
      return null
    }
    return(
      <Card style={{ width: '32rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
          <Card.Text>
            {body[1]}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  else {
    return(
      <Card style={{ width: '32rem' }}>
        <Card.Body>
          <Card.Text>
            {item}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
})
}
*/