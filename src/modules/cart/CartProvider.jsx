import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Get cart from localStorage on initial load
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : { excursion: null, date: null, participants: 1 };
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (excursion, date, participants) => {
    setCart({
      excursion,
      date,
      participants,
    });
  };

  const updateParticipants = (participants) => {
    setCart(prev => ({
      ...prev,
      participants,
    }));
  };

  const clearCart = () => {
    setCart({ excursion: null, date: null, participants: 1 });
  };

  const hasItemsInCart = () => {
    return cart.excursion !== null && cart.date !== null;
  };

  const getTotalPrice = () => {
    if (!cart.excursion) return 0;
    return parseFloat(cart.excursion.price) * cart.participants;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateParticipants,
        clearCart,
        hasItemsInCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}