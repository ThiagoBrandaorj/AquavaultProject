import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
    return (
        <header>
            <h1>Loja de Lockboxes</h1>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cart">Carrinho</Link>
                <Link to="/checkout">Finalizar Compra</Link>
            </nav>
        </header>
    );
}

export default Header;
