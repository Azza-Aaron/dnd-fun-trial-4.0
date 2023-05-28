import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createNew} from "../../../pages/login/createAccount";
import {useState} from "react";

export const CreateAccountForm = ({setUsername}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mutedUsername, setMutedUsername] = useState('')
  const [mutedEmail, setMutedEmail] = useState("We'll never share your email with anyone else.")
  const [mutedPassword, setMutedPassword] = useState('')
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e) => {
          setName(e.target.value);
        }} />
        <Form.Text className="text-muted">
          {mutedUsername}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <Form.Text className="text-muted">
          {mutedEmail}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value);
        }} />
        <Form.Text className="text-muted">
          {mutedPassword}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={()=>
      {
        const user = {username: name, email: email, password: password}
        createNew(user, setMutedEmail, setMutedPassword, setMutedUsername, setUsername)
      }}>
        Submit
      </Button>
    </Form>
  );
}