import React, { useContext } from 'react';
import AppContext from "../../Contex/AppContex";

import { Row, Card, Container, Spinner, Button } from 'react-bootstrap'

function CardProduct() {
  const { product } = useContext(AppContext);
  return (
    <Container style={{ margin: '10px', height: '90vh', overflow: 'scroll', width: '100%' }}>
      {product ? (
        <Row
          xs={2}
          md={5}
          className="g-2"
        >
        {Object.keys(product).map((value, idx) => (
          <Card key={idx} class="card"  bg='warning'>
            <Card.Img variant="top" style={{ width: '100px', margin: 'auto'}} src={product[value].thumbnail} />
            <Card.Title style={{ fontSize: '16px' }}>{product[value].title}</Card.Title>
            <Card.Text style={{ textAlign: 'end',  fontWeight: '600'}}>{`R$ ${product[value].price}`}</Card.Text>
            <Card.Footer><Button style={{ width: '100%' }}>Adicionar ao carrinho</Button></Card.Footer>
          </Card>
        ))}
      </Row>
      ) : <Spinner style={{ margin: 'auto' }} animation="border" />}
    </Container>
  )
}

export default CardProduct;
