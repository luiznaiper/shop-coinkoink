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
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/carrito" element={<Checkout />} />
            <Route
              exact
              path="/carrito/informacion"
              element={<Information />}
            />
            <Route exact path="/carrito/pago" element={<Payment />} />
            <Route exact path="/carrito/exito" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
