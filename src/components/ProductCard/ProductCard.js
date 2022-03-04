import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import "./style.css";
function ProductCard(props) {
  return (
    <Container>
      <Row>
        {console.log("C", props.product.gameThumbnail)}
        <Card style={{ width: "18rem", margin: "10px " }}>
          <Card.Img
            variant="top"
            src={`https://${props.product.gameThumbnail}`}
          />
          <Card.Body>
            <Card.Title>
              <Link to={`/products/${props.product.gameName}`}>
                language:{props.product.language}
              </Link>
            </Card.Title>
            <Card.Text>
              <Link to={`/products/${props.product.gameName}`}>
                {props.product.gameName}
              </Link>
            </Card.Text>
            <Button variant="dark">
              {" "}
              <Link to={`/products/${props.product.slug}`}>View</Link>
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProductCard;
