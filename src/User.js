import { Card, Button } from "react-bootstrap";
import "./user.css";

const User = (data) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="cardContainer">
        <Card.Img variant="top" src={data.data.image} />
        <Card.Body>
          <Card.Title>
            {data.data.firstName} {data.data.lastName} {data.data.maidenName}
          </Card.Title>
          <Card.Text>
            {data.data.address.address} {data.data.address.city}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default User;
