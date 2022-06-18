import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
        <Route exact path="/checkout/informacion" element={<Information/>} />
        <Route exact path="/checkout/pago" element={<Payment/>} />
        <Route exact path="/checkout/exito" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
