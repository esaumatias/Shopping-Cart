import React from 'react';
import Header from '../Components/Header/Header';
import CardProduct from '../Components/CardProduct/CardProduct';
import Cart from '../Components/Cart/Cart';
import { Container  } from 'react-bootstrap';

function Home() {
  
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Header />
          <CardProduct />
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </Container>
  );
}

export default Home;
