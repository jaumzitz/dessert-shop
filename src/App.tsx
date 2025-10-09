import React from 'react';
import './App.css';
import Home from './pages/Home';
import { CartProvider } from './contexts/CartContext';

function App() {

  let name: string = "joao"

  return (

    <CartProvider>
      <Home></Home>
    </CartProvider>
  );
}

export default App;
