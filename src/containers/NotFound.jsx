import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Coink Oink | 404</title>
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
      <h1>NotFound</h1>;
    </React.Fragment>
  );
};

export { NotFound };
