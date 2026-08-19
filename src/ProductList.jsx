import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Plantas purificadoras de aire",
            plants: [
                { 
                    name: "Lengua de Suegra (Snake Plant)", 
                    image: "https://floristeriabasusta.com/wp-content/uploads/yootheme/cache/a5/07_01_Sansiviera-a5cc4cc1.webp?src=wp-content/uploads/07_01_Sansiviera.jpg&type=webp,85&hash=b11eb13a", 
                    description: "Produce oxígeno durante la noche.", 
                    cost: "$15" 
                },
                { 
                    name: "Cinta (Spider Plant)", 
                    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500", 
                    description: "Fácil de cultivar y propagar.", 
                    cost: "$12" 
                }
            ]
        },
        {
            category: "Plantas aromáticas",
            plants: [
                { 
                    name: "Lavanda", 
                    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=500", 
                    description: "Aroma calmante para relajarse.", 
                    cost: "$20" 
                },
                { 
                    name: "Jazmín", 
                    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500", 
                    description: "Flores con un aroma dulce.", 
                    cost: "$18" 
                }
            ]
        },
        {
            category: "Plantas de bajo mantenimiento",
            plants: [
                { 
                    name: "Aloe Vera", 
                    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500", 
                    description: "Cuidados medicinales y sencillos.", 
                    cost: "$10" 
                },
                { 
                    name: "Planta ZZ", 
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500", 
                    description: "Prospera con poca luz.", 
                    cost: "$25" 
                }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({ ...prevState, [product.name]: true }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            {/* Header / Navbar */}
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ cursor: 'pointer' }} onClick={() => setShowCart(false)}>
                    <h2>Paradise Nursery</h2>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <a href="#plants" onClick={(e) => { e.preventDefault(); setShowCart(false); }} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Plantas</a>
                    <a href="#cart" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
                        🛒 Carrito <span className="cart-count">({totalQuantity})</span>
                    </a>
                </div>
            </div>

            {/* Alternar entre vista de Carrito o Catálogo */}
            {showCart ? (
                <CartItem onContinueShopping={handleContinueShopping} />
            ) : (
                <div className="product-grid" style={{ padding: '20px' }}>
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{category.category}</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                                {category.plants.map((plant, plantIndex) => (
                                    <div key={plantIndex} className="product-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center' }}>
                                        <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p style={{ fontWeight: 'bold' }}>{plant.cost}</p>
                                        <button
                                            disabled={addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)}
                                            onClick={() => handleAddToCart(plant)}
                                            style={{ 
                                                padding: '8px 15px', 
                                                backgroundColor: (addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)) ? '#888' : '#4CAF50', 
                                                color: 'white', 
                                                border: 'none', 
                                                borderRadius: '4px', 
                                                cursor: (addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)) ? 'not-allowed' : 'pointer' 
                                            }}
                                        >
                                            {(addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)) ? "Añadido al carrito" : "Añadir al carrito"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;