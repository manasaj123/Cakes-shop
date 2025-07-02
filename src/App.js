import React, { useState, useEffect } from 'react';
import cakes from './data';
import CakeCard from './CakeCard';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Filter based on search and selected category
  const filteredCakes = cakes.filter(cake => {
    const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === 'All') return matchesSearch;
    return cake.category === selectedCategory && matchesSearch;
  });

  // Limit display to 6 cakes only for 'Eggless' category (Cakes)
  const displayedCakes =
    selectedCategory === 'Eggless'
      ? (showAll ? filteredCakes : filteredCakes.slice(0, 6))
      : filteredCakes;

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''} animated-background`}>

      {/* === POPUP === */}
      {showPopup && (
        <div className="popup">
          🎉 10% OFF – <span className="popup-link" onClick={() => setShowModal(true)}>Conditions Apply</span>
        </div>
      )}

      {/* === OFFER MODAL === */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Offer Conditions:</h3>
            <ul>
              <li>Valid only on prepaid UPI orders</li>
              <li>Minimum purchase: ₹500</li>
              <li>Not valid for customized or fondant cakes</li>
              <li>Applicable once per customer</li>
              <li>Limited time only</li>
            </ul>
            <button className="close-modal" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* === CONTACT MODAL === */}
      {showContactPopup && (
        <div className="modal-overlay" onClick={() => setShowContactPopup(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>📩 Contact Details</h3>
            <p>📞 Phone: <a href="tel:9962607717">9962607717</a></p>
            <p>📍 Location: Aundipatti, Theni District</p>
            <p>📧 Email: spcakesdelight@example.com</p>
            <p className="delivery-note">
              🚚 <strong>Note:</strong> Delivery charges are applied based on location.
            </p>
            <button className="close-modal" onClick={() => setShowContactPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* === HEADER === */}
      <header className="modern-header">
        <div className="modern-logo">SP Cakes & Delight</div>
        <div className='search-mode-container'>
          <input
            type="text"
            placeholder="Search cakes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <nav className="header-nav">
          <a href="#all" onClick={() => { setSelectedCategory('All'); setShowAll(false); }}>All Items</a>
          <a href="#cakes" onClick={() => { setSelectedCategory('Eggless'); setShowAll(false); }}>Cakes</a>
          <a href="#brownies" onClick={() => { setSelectedCategory('Brownie'); setShowAll(false); }}>Brownies</a>
          <a href="#cookies" onClick={() => { setSelectedCategory('Cookie'); setShowAll(false); }}>Cookies</a>
          <a href="#contact" onClick={() => setShowContactPopup(true)} className="order-link">📞 Order Now</a>
        </nav>
      </header>

      <main>
        {/* === BANNER === */}
        <div className="menu-banner">
          <img
            src="/Sp cakes.png"
            alt="Cakes and Cookies Banner"
            className="banner-image"
          />
        </div>

        {/* === CAKE CARDS === */}
        <div className="cake-grid">
          {displayedCakes.map((cake, index) => (
            <CakeCard cake={cake} key={index} />
          ))}
        </div>

        {/* === SHOW ALL BUTTON (only for Cakes) === */}
        {selectedCategory === 'Eggless' && filteredCakes.length > 6 && (
          <div className="show-all-container">
            <button
              className="show-all-btn"
              onClick={() => setShowAll(prev => !prev)}
            >
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </div>
        )}
      </main>

      {/* === FOOTER === */}
      <footer className="footer">
        <div className="footer-content updated-footer">
          <div className="footer-contact">
            📞 <a href="tel:9962607717">Order Now: 9962607717</a>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/Facebook.png" alt="Facebook" />
            </a>
          </div>
          <div className="footer-copy">© SP Cake & Delight, Aundipatti, Theni District.</div>
          <p className="payment-note">
            💳 <strong>Only UPI & Cash on Delivery (COD) accepted</strong>. ❌ Card payments not available.
          </p>
          <p className="delivery-note">
            🚚 <strong>Note:</strong> Delivery charges are applied based on location.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
