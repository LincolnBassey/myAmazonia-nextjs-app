import { create } from 'zustand'

export const useBearStore = create((set) => ({  
    cartItems: [],
    totalCount: 0, // New state variable for total quantity
    totalPrice: 0,
  
    addToCart: (product) => set((state) => {
        const existingItem = state.cartItems.find(item => item.id === product.id);
    
        if (existingItem) {
          const updatedCart = state.cartItems.map(item => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 };
            }            
            return item;
          });
    
          const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
          const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);          
          return { cartItems: updatedCart, totalCount: totalQuantity, totalPrice };
        } else {
          const updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
          const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
          const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);          
          return { cartItems: updatedCart, totalCount: totalQuantity, totalPrice };
        }
      }),
    
      removeFromCart: (id) => set((state) => {
        const updatedCart = state.cartItems.map(item => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        }).filter(item => item !== null);
    
        const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
        return { cartItems: updatedCart, totalCount: totalQuantity, totalPrice };
      }),
    
      emptyCart: () => set({ cartItems: [], totalCount: 0, totalPrice: 0 }),
}))