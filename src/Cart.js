import React from 'react';
import { useCart } from './CartContext'; // Importa o hook do contexto do carrinho
import './Cart.css'; // Importa o arquivo CSS

function Cart() {
    const { cartItems } = useCart();

    // Calcula o subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Itens no Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - R${item.price.toFixed(2)} (Quantidade: {item.quantity})
                            </li>
                        ))}
                    </ul>
                    <h3>Subtotal: R${subtotal.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;
