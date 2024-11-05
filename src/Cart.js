import React from 'react';
import { useCart } from './CartContext'; // Importa o hook do contexto do carrinho

function Cart() {
    const { cartItems } = useCart();

    return (
        <div>
            <h2>Itens no Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - R${item.price.toFixed(2)} (Quantidade: {item.quantity})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
