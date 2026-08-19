import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Donde el verde se encuentra con la serenidad</p>
            <AboutUs />
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Comenzar
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;