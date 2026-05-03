import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/db.json";

const initialState = {
  products: data.products,
  loading: "idle",
  error: null,
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    MaxHandle: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);

      if (product && product.max > 0) {
        product.max -= 1;
      }
    },
  },
});

export const { MaxHandle } = ProductSlice.actions;

export default ProductSlice.reducer;
