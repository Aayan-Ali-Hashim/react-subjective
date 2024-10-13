// useCart.ts
import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  return cart ? { cart, setCart } : null;
};

export default useCart;