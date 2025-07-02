import React from 'react';
import './index.css';

export default function CakeCard({ cake }) {
  return (
    <div className="cake-card">
      {cake.label && <p className="special-label">{cake.label}</p>}
      {cake.preBooking && <p className="prebooking-tag">🕐 Pre Booking Order Only</p>}
      {cake.image && <img src={cake.image} alt={cake.name} className="cake-image" />}
      <h3>{cake.name}</h3>
      {cake.category && <p className="category">{cake.category}</p>}
      {cake.price1kg && <p><strong>per Kg:</strong> ₹{cake.price1kg}</p>}
      {cake.priceHalfKg && <p><strong>½ Kg:</strong> ₹{cake.priceHalfKg}</p>}

      {cake.priceHeartKg && <p>❤️ <strong>Heart Shape Kg:</strong> ₹{cake.priceHeartKg}</p>}
      {cake.priceHeartHalfKg && <p>❤️ <strong>Heart Shape ½ Kg:</strong> ₹{cake.priceHeartHalfKg}</p>}
      
      {cake.weight && <p><strong>Weight:</strong> {cake.weight}</p>}
      {cake.priceEgg && <p><strong>Egg:</strong> ₹{cake.priceEgg}</p>}
      {cake.priceEggless && <p><strong>Eggless:</strong> ₹{cake.priceEggless}</p>}
      {cake.priceGanache && <p><strong>With Ganache:</strong> ₹{cake.priceGanache}</p>}

      {cake.quantity && <p><strong>Quantity:</strong> {cake.quantity}</p>}
      {cake.pricePlain && <p><strong>Plain:</strong> ₹{cake.pricePlain}</p>}
      {cake.priceFrosting && <p><strong>With Cream Frosting:</strong> ₹{cake.priceFrosting}</p>}

      {cake.price250g && <p><strong>250g:</strong> ₹{cake.price250g}</p>}
      {cake.price500g && <p><strong>500g:</strong> ₹{cake.price500g}</p>}

      {!cake.preBooking && <p className="delivery">Earliest Delivery: <span>Today</span></p>}
    </div>
  );
}
