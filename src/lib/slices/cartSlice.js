import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProducts.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === productId,
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingProduct.price;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== productId,
        );
        state.totalQuantity -= 1;
        state.totalPrice -= existingProduct.price;
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === productId,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingProduct.price;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === productId,
      );
      if (existingProduct) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== productId,
        );
        state.totalQuantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.price * existingProduct.quantity;
      }
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
