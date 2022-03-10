import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import "./style.css";
function ProductCard(props) {
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem", margin: "10px " }}>
          <Card.Img
            variant="top"
            src={`https://${props.product.gameThumbnail}`}
          />
          <Card.Body>
            <Card.Title>language:{props.product.language}</Card.Title>
            <Card.Text>{props.product.gameName}</Card.Text>
            <Button variant="dark">
              <Link to={`/products/${props.product.slug}`}>View</Link>
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProductCard;
