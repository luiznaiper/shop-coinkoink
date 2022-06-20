import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound,
} from '../containers';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/carrito" element={<Checkout />} />
          <Route exact path="/carrito/informacion" element={<Information />} />
          <Route exact path="/carrito/pago" element={<Payment />} />
          <Route exact path="/carrito/exito" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
