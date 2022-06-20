import React from 'react';
import '../styles/components/Checkout.css'

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
          <button type='button'>Eliminar</button>
        </div>
      </div>
      <aside className="Checkout-sidebar">
        <h3>Precio Total: $500</h3>
        <button type='button'>Continuar pedido</button>
      </aside>
    </div>
  )
};

export { Checkout };
