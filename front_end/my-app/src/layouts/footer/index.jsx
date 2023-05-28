import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import {ButtonGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const MyFooter = ({setMode, mode}) => {
  const navigate = useNavigate()
  return (
    <Container style={{position: 'relative', left:'0', bottom: '0', right:'0'}} className={'mt-3'}>
      <Row>
        <Col>
          <Card>
          {/*<Card.Header>Featured</Card.Header>*/}
          <Card.Body>
            <Card.Title>special thanks too</Card.Title>
            <Card.Text>
              dnd5eapi.co &
              open5e
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <Card>
            {/*<Card.Header>Featured</Card.Header>*/}
            <Card.Body>
              <Card.Title>Choose Dm or Player</Card.Title>
              <Card.Text>
                Dm or Player? If player, choose a character first!
                <ButtonGroup>
                  <Button variant={"dark"} onClick={() => {
                    sessionStorage.setItem('type', 'dm')
                    setMode(true)
                  }}>Dungeon Master</Button>
                  <Button variant={"dark"} onClick={() => {
                    sessionStorage.setItem('type', 'player')
                    setMode(false)
                  }}>Player</Button>
                  <Button variant={"dark"} onClick={() => {
                    navigate('/character')
                  }}>Choose Character</Button>
                </ButtonGroup>
              </Card.Text>
              {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          {/*<Card.Header>Featured</Card.Header>*/}
          <Card.Body>
            <Card.Title>about</Card.Title>
            <Card.Text>
              add info here,
              written for the misfits
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}
