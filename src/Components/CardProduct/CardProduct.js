import React, { useContext } from 'react';
import AppContext from "../../Contex/AppContex";

import './CardProduct.css';

import { Row, Card, Container, Spinner, Button } from 'react-bootstrap';

function CardProduct() {
  const { product, setCarItens, carItens, priceCart, setPriceCart } = useContext(AppContext);

  function addCart(index, name, price, img) {
    const itens = {index, name, price, img};
    setCarItens([...carItens, itens]);
    setPriceCart(priceCart + price)
  }

  return (
    <Container
      style={{
        backgroundColor: '#ffc108',
        overflowY: 'scroll',
        margin: '10px',
        height: '90vh',
        width: '100%',
      }}
    >
      {product.length > 0 ? (
        <Row xs={2} md={5} className="containerProducts">
          {Object.keys(product).map((value, idx) => (
            <Card key={idx} className="card" bg="light" style={{ margin: '10px' }}>
              <Card.Img
                variant="top"
                style={{ width: "100px", margin: "auto" }}
                src={product[value].thumbnail}
              />
              <Card.Title style={{ fontSize: "16px" }}>
                {product[value].title}
              </Card.Title>
              <Card.Text
                style={{ textAlign: "end", fontWeight: "600" }}
              >{`R$ ${product[value].price}`}</Card.Text>
              <Card.Footer>
                <Button
                  onClick={() =>
                    addCart(
                      idx,
                      product[value].title,
                      product[value].price,
                      product[value].thumbnail
                    )
                  }
                  style={{ width: "100%", fontSize: "12px"}}
                >
                  Adicionar ao carrinho
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </Row>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "61.05rem",
            height: "80vh",
          }}
        >
          <Spinner style={{ margin: "auto" }} animation="border" />
        </div>
      )}
    </Container>
  );
}

export default CardProduct;
