import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import productList from './component/data';

function App() {
  const [productId, setProductId] = useState(null);
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    if (productId) {
      const selectedProduct = productList.find((product) => product.id === productId);

      if (!selectedProduct) return;

      setCartAllProduct((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === selectedProduct.id);

        if (existingItem) {
          // If already in cart, increase count
          return prevCart.map((item) =>
            item.id === selectedProduct.id ? { ...item, count: item.count + 1 } : item
          );
        } else {
          // Add new item with count = 1
          return [...prevCart, { ...selectedProduct, count: 1 }];
        }
      });
    }
  }, [productId]);

  return (
    <BrowserRouter>
      <Header cartAllProduct={cartAllProduct} />
      <Routes>
        <Route path='/' element={<Home setProductId={setProductId} />} />
        <Route
          path='/cart'
          element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
