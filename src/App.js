import './App.css';

import headphones from './assets/headphones.jpg';
import smartwatch from './assets/smartwatch.jpg';
import shoes from './assets/shoes.jpg';
import backpack from './assets/backpack.jpg';

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      image: headphones,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      image: smartwatch,
      category: "Wearables"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "₹1,999",
      image: shoes,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "₹1,299",
      image: backpack,
      category: "Accessories"
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">ShopEasy</div>
        <nav>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Offers</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Shop the latest gadgets, fashion, and accessories at unbeatable prices.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>Featured Products</h2>
        <p className="subtitle">Top picks for you</p>

        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="card-content">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>

                <div className="buttons">
                  <button className="cart-btn">Add to Cart</button>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="offer">
        <h2>Special Offer</h2>
        <p>Get up to 50% OFF on selected items!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ShopEasy | Designed for Smart Shopping</p>
      </footer>
    </div>
  );
}

export default App;