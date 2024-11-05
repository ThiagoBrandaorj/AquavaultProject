import React from 'react';

function Checkout() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your checkout logic here
        alert('Compra finalizada com sucesso!');
    };

    return (
        <div>
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" required />
                </label>
                <label>
                    Endereço:
                    <input type="text" required />
                </label>
                <label>
                    Cartão de Crédito:
                    <input type="text" required />
                </label>
                <button type="submit">Comprar</button>
            </form>
        </div>
    );
}

export default Checkout;
