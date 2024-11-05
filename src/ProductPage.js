import React, { useState } from 'react';
import './ProductPage.css'; // Importa o arquivo CSS
import productImage1 from './aquavault.jpg';
import productImage2 from './aquavault_2.jpg';
import productImage3 from './aquavault_3.jpg';
import productImage4 from './aquavault_4.jpg';
import { useCart } from './CartContext'; // Importa o hook do contexto do carrinho

const images = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
];

function ProductPage() {
    const { addToCart } = useCart(); // Acessa a função de adicionar ao carrinho
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = () => {
        const item = {
            id: currentImageIndex, // Identificador do produto (ou use um ID específico)
            name: "Lockbox Seguro",
            price: 225.00,
            quantity: quantity
        };
        addToCart(item);
        alert(`Produto adicionado ao carrinho! Quantidade: ${quantity}`);
    };

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="product-page">
            <img src={images[currentImageIndex]} alt="Lockbox seguro" />
            <h2>Lockbox Seguro</h2>
            <p>Descrição: Uma caixa forte e segura para armazenar itens de valor.</p>
            <p className="price">Preço: R$225,00</p>
            <label>
                Quantidade:
                <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    onChange={(e) => setQuantity(e.target.value)} 
                />
            </label>
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
            <div className="image-selector">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleImageChange(index)} 
                        className={currentImageIndex === index ? 'active' : ''} 
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
