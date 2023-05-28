import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const MiddleLayout = ({ firstHeader, r1M, secondHeader, r2M}) => {
  return (
    <Container>
      <h3 style={{textAlign: 'center'}} className={'mt-3'}>{firstHeader}</h3>
      <Row className={'mt-3'}>
        <Col></Col>
        <Col>{r1M}</Col>
        <Col></Col>
      </Row>
      <h3 style={{textAlign: 'center'}} className={'mt-3'}>{secondHeader}</h3>
      <Row className={'mt-3'}>
        <Col></Col>
        <Col>{r2M}</Col>
        <Col></Col>
      </Row>
    </Container>)
}