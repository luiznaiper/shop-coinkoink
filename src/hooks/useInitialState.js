import { useState, useEffect } from 'react';
import axios from 'axios';
import initialSate from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialSate);
  const [products, setProducts] = useState([]);

  const API = 'http://localhost:1337/api/products';

  useEffect(() => {
    const getData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getData();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (_, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
  };
};

export { useInitialState };
