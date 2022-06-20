import React from 'react';
import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Nombre completo" name="name" />
            <label htmlFor="email"></label>
            <input type="text" placeholder="Email" name="email" />
            <label htmlFor="tel"></label>
            <input type="text" placeholder="Teléfono" name="tel" />
            <label htmlFor="address"></label>
            <input type="text" placeholder="Calle y número #" name="address" />
            <label htmlFor="address2"></label>
            <input type="text" placeholder="Colonia" name="address2" />
            <label htmlFor="cp"></label>
            <input type="text" placeholder="Código Postal" name="cp" />
            <label htmlFor="state"></label>
            <input type="text" placeholder="Estado" name="state" />
            <label htmlFor="city"></label>
            <input type="text" placeholder="Ciudad" name="city" />
          </form>
        </div>
        <div className="Information-back">Regresar</div>
        <div className="Information-next">Pagar</div>
      </div>
      <aside className="Information-sidebar">
        <h3>Pedido</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Nombre del item</h4>
            <span>$500</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export { Information };
