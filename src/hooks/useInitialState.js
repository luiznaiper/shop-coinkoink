import { useState } from 'react';
import initialSate from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialSate);

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
  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export { useInitialState };
