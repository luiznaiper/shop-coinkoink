import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Luis, Gracias por tu compra</h2>
        <span>Tu pedido va a llegar en 5 días a tu dirección</span>
        <div className="Success map">Google Maps</div>
      </div>
    </div>
  );
};

export { Success };
