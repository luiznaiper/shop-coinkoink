import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Coink Oink</Link>
      </h1>
      <div className="Header-checkout">
       <Link to="/carrito">
          <i className='fas fa-cart-shopping'/>
       </Link>        
      </div>
    </div>
  );
};

export { Header };
