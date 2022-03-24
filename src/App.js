import React from 'react';
import Header from './Components/Header/Header';
import CardProduct from './Components/CardProduct/CardProduct';
import Cart from './Components/Cart/Cart';
import AppProvider from './Contex/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container  } from 'react-bootstrap'


function App() {
  
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
