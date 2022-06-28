import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const navigate = useNavigate();
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/carrito/exito');
    }
  };

  const handleSumTotal = () => {
    const reducer = (acc, el) => acc + el.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Coink Oink | Pago</title>
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
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.id}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: 'USD',
                        value: handleSumTotal(),
                      },
                    },
                  ],
                });
              }}
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amout={handleSumTotal()}
              onPaymentStart={() => console.log('Start payment')}
              onSuccess={(data) => handlePaymentSuccess(data)}
              onApprove={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
        <aside />
      </div>
    </React.Fragment>
  );
};

export { Payment };
