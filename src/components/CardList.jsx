import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardList({ name, email, address, phone, id }) {
  let { street } = address;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Subtitle> {email} </Card.Subtitle>
        <Card.Text>Street: {street}</Card.Text>

        <Card.Footer>Phone: {phone}</Card.Footer>
        <Button variant="primary">
          <Link style={{ all: "unset" }} to={`/posts/${id}`}>
            Posts
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardList;
