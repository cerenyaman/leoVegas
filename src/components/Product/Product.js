import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";
function Product() {
  const { gameName } = useParams();
  const [filtered, setFiltered] = useState();
  const url = `https://www.mocky.io/v2/5da99f9f31000036004e0a4e`;
  const [product, setProduct] = useState([]);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, []);

  useEffect(() => {
    setFiltered(product.find((item) => item.slug === gameName));
  }, [product]);

  if (filtered) {
    content = (
      <div>
        <Container>
          <h2 className="text-detail">Detail Page</h2>
          <Row>
            <Card style={{ width: "18rem", margin: "10px " }}>
              <Card.Img
                variant="top"
                src={`https://${filtered.gameThumbnail}`}
              />
              <Card.Body>
                <Card.Title>{filtered.language}</Card.Title>
                <Card.Text>{filtered.gameName}</Card.Text>
                <Card.Text>{filtered.slug}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
  return <div>{content}</div>;
}
export default Product;
