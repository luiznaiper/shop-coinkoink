import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Nombre del item:</h4>
            <span>$40</span>
          </div>
          <button type="button">
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
      </div>
      <aside className="Checkout-sidebar">
        <h3>Precio Total: $500</h3>
        <Link to="/carrito/informacion">
            <button type="button">Continuar pedido</button>
        </Link>
      </aside>
    </div>
  );
};

export { Checkout };
