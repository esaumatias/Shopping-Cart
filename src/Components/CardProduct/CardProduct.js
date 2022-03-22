import React, { useContext } from 'react';
import AppContext from "../../Contex/AppContex";

import { Row, Card, Col, Container, Spinner, Button } from 'react-bootstrap'

function CardProduct() {
  const { product } = useContext(AppContext);
  return (
    <Container>
      {product.length > 0? (
        <Row
          xs={2}
          md={5}
          className="g-6"
        >
        {Object.keys(product).map((value, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product[value].thumbnail} />
              <Card.Body>
                <Card.Title>{product[value].title}</Card.Title>
                <Card.Text>{product[value].amount}</Card.Text>
                <Card.Footer><Button>Adicionar ao carrinho</Button></Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      ) : <Spinner animation="border" />}
    </Container>
  )
}

export default CardProduct;
