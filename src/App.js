import React from 'react';
import Home from './Pages/Home';
import AppProvider from './Contex/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <AppProvider>
     <Home />
    </AppProvider>
  );
}

export default App;
