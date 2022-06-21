import React, {useRef, useContext} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {AppContext } from '../context/AppContext'
import '../styles/components/Information.css';

const Information = () => {
  const {state, addToBuyer} = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate ()
  const {cart} = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'tel': formData.get('tel'),
      'address': formData.get('address'),
      'address2': formData.get('address2'),
      'cp': formData.get('cp'),
      'state': formData.get('state'),
      'city': formData.get('city'),
    }
    addToBuyer(buyer);
    navigate('/carrito/pago')

  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
        <div className="Information-back">
          <Link to="/carrito">Regresar</Link>
          </div>
        <div className="Information-next">
          <button type="button" onClick={handleSubmit}>Pagar</button>
        </div>
      </div>
      <aside className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
                 <div className="Information-item" key={item.title}>
                 <div className="Information-element">
                   <h4>{item.title}</h4>
                   <span>${item.price}</span>
                 </div>
               </div>
        ))}
      </aside>
    </div>
  );
};

export { Information };
