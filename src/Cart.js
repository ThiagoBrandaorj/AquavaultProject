import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';

function Cart() {
    const { cartItems, setCartItems } = useCart();
    const [isRemoving, setIsRemoving] = useState(false);

    const removeItem = (index) => {
        if (isRemoving) return; // Prevenir múltiplas remoções simultâneas
        setIsRemoving(true);

        setTimeout(() => {
            setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
            setIsRemoving(false);
        }, 300);
    };

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
                                <div className="cart-item">
                                    <span>
                                        {item.name} - Quantidade: {item.quantity} - R$
                                        {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                    <button
                                        className="remove-button"
                                        onClick={() => {
                                            if (window.confirm('Tem certeza que deseja remover este item?')) {
                                                removeItem(index);
                                            }
                                        }}
                                        disabled={isRemoving}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>
                        Subtotal: R$
                        {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </h3>
                </>
            )}
        </div>
    );
}

export default Cart;
