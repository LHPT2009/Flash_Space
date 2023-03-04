import { Button, Card } from "react-bootstrap";

const ItemCard = () => {
  return (
    <Card style={{ width: "19rem", marginBottom: "25px" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="btn btn-light btn-icon">
          <i className="fa fa-heart"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
