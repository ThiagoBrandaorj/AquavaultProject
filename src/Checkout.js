import React, { useState } from 'react';
import './Checkout.css'; // Importa o arquivo CSS

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        state: '',
        city: '',
        cep: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your checkout logic here
        alert('Compra finalizada com sucesso!');
        console.log(formData); // Para ver os dados coletados
    };

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <label className="checkout-label">
                    Nome Completo:
                    <input className="checkout-input" type="text" name="name" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    Telefone:
                    <input className="checkout-input" type="text" name="phone" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    E-mail:
                    <input className="checkout-input" type="email" name="email" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    Estado:
                    <input className="checkout-input" type="text" name="state" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    Cidade:
                    <input className="checkout-input" type="text" name="city" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    CEP:
                    <input className="checkout-input" type="text" name="cep" required onChange={handleChange} />
                </label>
                <label className="checkout-label">
                    Endereço:
                    <input className="checkout-input" type="text" name="address" required onChange={handleChange} />
                </label>
                <button className="checkout-button" type="submit">Comprar</button>
            </form>
        </div>
    );
}

export default Checkout;
