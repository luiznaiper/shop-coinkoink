import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleSumTotal = () => {
    const reducer = (acc, el) => acc + el.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length > 0 ? (
          <h3>Lista de pedidos:</h3>
        ) : (
          <h3>
            Sin pedidos :( <Link to="/">¡Elige tu favorito!</Link>
          </h3>
        )}
        {cart.map((item, i) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <aside className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
          <Link to="/carrito/informacion">
            <button type="button">Continuar pedido</button>
          </Link>
        </aside>
      )}
    </div>
  );
};

export { Checkout };
