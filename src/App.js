import React, { useState } from 'react';
import cakes from './data';
import CakeCard from './CakeCard';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredCakes = cakes.filter(cake =>
    cake.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''} animated-background`}>
      

      <header className="header">
        <div className="top-header">
          <div className="logo">🧁 Layers of Delight</div>
          <div className="contact">Priya📞Contact Us: <a href="tel:9962607717">9962607717</a></div>
        </div>

        <div className="search-mode-container">
          <input
            type="text"
            placeholder="Search cakes...🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </header>

      <main>
        <h1 className="heading">Our Cakes & Cookies Menu</h1>
        <div className="cake-grid">
          {filteredCakes.map((cake, index) => (
            <CakeCard cake={cake} key={index} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <div> Order Contact:</div>
        <div>© D.Shanmuga Priya, 8-2/34A Kamarajar Nagar 1st Street, Aundipatti - 625 512. Theni (Dist).</div>
        <div className="footer-contact">Priya :📞 Contact Us: <a href="tel:9962607717">9962607717</a></div>
      </footer>
    </div>
  );
}

export default App;
