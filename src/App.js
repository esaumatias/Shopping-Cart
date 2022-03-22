import React from 'react';
import Header from './Components/Header/Header';
import CardProduct from './Components/CardProduct/CardProduct';
import AppProvider from './Contex/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <AppProvider>
      <Header />
      <CardProduct />
    </AppProvider>
  );
}

export default App;
