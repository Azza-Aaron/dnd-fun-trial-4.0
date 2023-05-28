import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {string} from "yup";
import {useState} from "react";
import {testQuest} from "../../pages/quests/addQuest";

export const BlogStyle = ({
                            header,
                            body,
                            reward,
                            daysOrLength,
                            associationsCharsEtc,
                            obstacles,
                            additionalNotes,
                            requirements,
                            setUpdate,
                            update
                          }) => {
  const [formFilledIncorrectly, setFormFilledIncorrectly] = useState('')
  const [newQuest] = useState({})
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{header}</Form.Label>
        <Form.Control size={'lg'} type="text" placeholder="Quest Name" onChange={
          (e) => {
            newQuest.questHeader = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{body}</Form.Label>
        <Form.Control as="textarea" rows={12} onChange={
          (e) => {
            newQuest.questBody = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{reward}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.questReward = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{daysOrLength}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.questLength = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{associationsCharsEtc}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.questCharacters = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{additionalNotes}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.notes = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{obstacles}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.questObstacles = e.target.value
          }
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{requirements}</Form.Label>
        <Form.Control type="text" placeholder="Normal text" onChange={
          (e) => {
            newQuest.questRequirements = e.target.value
          }
        } />
      </Form.Group>
      <Button onClick={() => {
        testQuest(newQuest, setFormFilledIncorrectly, setUpdate, update)

      }}>Submit</Button>
      {formFilledIncorrectly ? <h6>{formFilledIncorrectly}</h6> : null}
    </Form>
  )
}