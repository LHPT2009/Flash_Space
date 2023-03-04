import { Button, Card } from "react-bootstrap";

const SingleCard = (props) => {
  return (
    <Card style={{ width: "19rem" }} className="mt-4 ml-4 mb-4">
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
