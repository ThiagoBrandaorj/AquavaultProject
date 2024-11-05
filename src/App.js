import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Checkout from './Checkout';
import { CartProvider } from './CartContext'; // Importar o provider do contexto

function App() {
    return (
        <CartProvider> {/* O CartProvider deve envolver todo o Router */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
