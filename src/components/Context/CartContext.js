import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const CartData = sessionStorage.getItem('cart');
        if (CartData) {
            setCartItem(JSON.parse(CartData));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem]);

    const addToCart = (product) => {
        const existingItem = cartItem.find(item => item.id === product.id);
        if (existingItem) {
            setCartItem(cartItem.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItem([...cartItem, { ...product, quantity: 1 }])
        }
    };

    return (
        <CartContext.Provider value={{ cartItem, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
