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
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/success" component={Success} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
