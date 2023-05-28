import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const GeneralLayout = ({r1L, r1M, r1R, r2L, r2M, r2R, r3L, r3M, r3R, r4L, r4M, r4R, r5L, r5M, r5R, wider}) => {
  if(wider){
    console.log('wider')
    return(
      <Container>
        <Row className={'mt-3'}>
          <Col>{r1L}</Col>
          <Col xs={8}>{r1M}</Col>
          <Col>{r1R}</Col>
        </Row>
        <Row className={'mt-3'}>
          <Col>{r2L}</Col>
          <Col xs={8}>{r2M}</Col>
          <Col>{r2R}</Col>
        </Row>
        <Row className={'mt-3'}>
          <Col>{r3L}</Col>
          <Col xs={8}>{r3M}</Col>
          <Col>{r3R}</Col>
        </Row>
        <Row className={'mt-3'}>
          <Col>{r4L}</Col>
          <Col xs={8}>{r4M}</Col>
          <Col>{r4R}</Col>
        </Row>
        <Row className={'mt-3'}>
          <Col>{r5L}</Col>
          <Col xs={8}>{r5M}</Col>
          <Col>{r5R}</Col>
        </Row>
      </Container>
    )
  }
  return(
    <Container>
      <Row className={'mt-3'}>
        <Col>{r1L}</Col>
        <Col>{r1M}</Col>
        <Col>{r1R}</Col>
      </Row>
      <Row className={'mt-3'}>
        <Col>{r2L}</Col>
        <Col>{r2M}</Col>
        <Col>{r2R}</Col>
      </Row>
      <Row className={'mt-3'}>
        <Col>{r3L}</Col>
        <Col>{r3M}</Col>
        <Col>{r3R}</Col>
      </Row>
      <Row className={'mt-3'}>
        <Col>{r4L}</Col>
        <Col>{r4M}</Col>
        <Col>{r4R}</Col>
      </Row>
      <Row className={'mt-3'}>
        <Col>{r5L}</Col>
        <Col xs={8}>{r5M}</Col>
        <Col>{r5R}</Col>
      </Row>
    </Container>
  )
}