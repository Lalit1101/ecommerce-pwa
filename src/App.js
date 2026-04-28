// src/App.js
import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "₹1,999",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "₹1,299",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1>ShopEasy</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Cart</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to ShopEasy</h2>
        <p>Best Deals on Electronics, Fashion & More</p>
        <button>Shop Now</button>
      </section>

      {/* Product Section */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ShopEasy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;