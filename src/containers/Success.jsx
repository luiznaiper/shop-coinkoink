import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <React.Fragment>
      <Helmet>
        <title>Coink Oink | Éxito</title>
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
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido va a llegar en 5 días a tu dirección</span>
          <div className="Success map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Success };
