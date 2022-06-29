import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
    <React.Fragment>
      <Helmet>
        <title>Coink Oink | Carrito</title>
        <meta property="og:title" content="Coink Oink" />
        <meta
          property="og:description"
          content="Alcancías Artesanales Personalizadas"
        />
        <meta
          property="og:image"
          content="https://client-images-plusmarketing.s3.amazonaws.com/coink-oink.jpeg"
        />
        <meta property="og:url" content="shop-coinkoink.xyz" />
        <meta property="og:site_name" content="Coink Oink" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
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
    </React.Fragment>
  );
};

export { Checkout };
