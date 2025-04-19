import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/routes';
import { CartProvider } from './modules/cart/CartProvider';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}