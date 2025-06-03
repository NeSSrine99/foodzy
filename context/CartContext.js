"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Always initialize as array, even if localStorage is empty or corrupted
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        // Ensure it's an array and has valid format
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.warn("Invalid cart data in localStorage", parsedCart);
          setCartItems([]);
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove product by ID
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems
      .reduce((acc, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = item.quantity || 1;
        return acc + price * quantity;
      }, 0)
      .toFixed(3);
  };

  // Get subtotal for a specific item
  const getItemSubtotal = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (!item) return "0.000";

    const price = parseFloat(item.price) || 0;
    const quantity = item.quantity || 1;

    return (price * quantity).toFixed(3);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotalPrice,
        getItemSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
