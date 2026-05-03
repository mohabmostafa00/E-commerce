import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const initialState = savedCart ? JSON.parse(savedCart) : [];

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((p) => p.id === action.payload.id);

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          max: action.payload.max,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteToCart: (state, action) => {
      const newCart = state.filter(
        (product) => product.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    },

    increaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload);

      if (product && product.quantity < product.max) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;