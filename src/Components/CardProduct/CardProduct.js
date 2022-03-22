import React, { useContext } from 'react';
import AppContext from "../../Contex/AppContex";

import { Row, Card, Container, Spinner, Button } from 'react-bootstrap'

function CardProduct() {
  const { product } = useContext(AppContext);
  return (
    <Container>
      {product ? (
        <Row
          xs={2}
          md={4}
          className="g-6"
        >
        {Object.keys(product).map((value, idx) => (
          <Card class="card"  bg='warning' style={{ margin: '10px' }}>
            <Card.Img variant="top" style={{ width: '100px', margin: 'auto'}} src={product[value].thumbnail} />
            <Card.Title style={{ fontSize: '16px' }}>{product[value].title}</Card.Title>
            <Card.Text style={{ textAlign: 'end',  fontWeight: '600'}}>{`R$ ${product[value].price}`}</Card.Text>
            <Card.Footer><Button style={{ width: '100%' }}>Adicionar ao carrinho</Button></Card.Footer>
          </Card>
        ))}
      </Row>
      ) : <Spinner animation="border" />}
    </Container>
  )
}

export default CardProduct;

          // <Col key={idx}>
          //   <Card>
          //     <Card.Img variant="top" style={{ width: '100px' }} src={product[value].thumbnail} />
          //     <Card.Body>
          //       <Card.Title style={{ fontSize: '16px' }}>{product[value].title}</Card.Title>
          //       <Card.Text>{`R$ ${product[value].price}`}</Card.Text>
          //       <Card.Footer><Button>Adicionar ao carrinho</Button></Card.Footer>
          //     </Card.Body>
          //   </Card>
          // </Col>