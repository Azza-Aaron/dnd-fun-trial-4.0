import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

export const CommonCardWithATag = ({featured, title, body, myUrl, mutedText} ) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={myUrl}>
      <Card className="text-center">
        <Card.Header>{featured}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{mutedText}</Card.Footer>
      </Card>
    </Link>
  );
}