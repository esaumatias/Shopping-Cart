import React from 'react';
import Rotas from './Rotas/Rotas';
import AppProvider from './Contex/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <AppProvider>
     <Rotas />
    </AppProvider>
  );
}

export default App;
