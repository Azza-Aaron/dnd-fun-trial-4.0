import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {submitLogin} from "../../../pages/login/submitLogin";

export const LoginForm = ({setUsername}) => {
  const [mutedEmail, setMutedEmail] = useState("We'll never share your email with anyone else.")
  const [mutedPassword, setMutedPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}/>
        <Form.Text className="text-muted">
          {mutedEmail}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}/>
        <Form.Text className="text-muted">
          {mutedPassword}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={() => {
        const user = {email: email, password: password}
        submitLogin(user, setMutedEmail, setMutedPassword, setUsername)
      }}>
        Submit
      </Button>
    </Form>
  );
}