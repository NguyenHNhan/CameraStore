import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      const savedItems = JSON.parse(localStorage.getItem('shoppingCart'));
      if (savedItems) {
        setItems(savedItems);
        const totalPrice = savedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalPrice(totalPrice);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(items));
      const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotalPrice(totalPrice);
    }, [items]);
  
    const addItemToCart = (item) => {
      const existingItem = items.find((i) => i.id === item.id);
      if (existingItem) {
        setItems(
          items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        setItems([...items, { ...item, quantity: 1 }]);
      }
    };

    return (
        <CartContext.Provider value={{ items, totalPrice, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}
