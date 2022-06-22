import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';


const Payment = ({navigate}) => {
  const {state, addNewOrder} = useContext(AppContext)
  const {cart, buyer} = state
  const paypalOptions = {
    clientId: 'AXikpeG7zOGhVthM9Hx1rQTDJwJtA0RUz64P1NCDmjkWq0KMX82o42zN',
    intent: 'capture',
    currency: 'MXN'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/carrito/exito');
    }
  }

  const handleSumTotal = () => {
    const reducer = (acc, el) => acc + el.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item)=> (
          <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <aside />
    </div>
  );
};

export { Payment };
