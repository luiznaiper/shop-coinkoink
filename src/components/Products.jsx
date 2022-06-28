import React, { useContext } from 'react';
import { Product } from './Product';
import { AppContext } from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    const random = Math.floor(Math.random() * 1000);
    const newProduct = { ...product, cartId: `${product.id}-${random}` };
    console.log(newProduct);
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {console.log(products)}
        {products.map((newProduct) => (
          <Product
            key={newProduct.id}
            product={newProduct}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
