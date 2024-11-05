import React, { createContext, useContext, useState } from 'react';

// Criação do contexto do carrinho
const CartContext = createContext();

// Provider do carrinho
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar o contexto do carrinho
export const useCart = () => {
    return useContext(CartContext);
};
