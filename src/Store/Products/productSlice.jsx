import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api/axios";

const initialState = {
  products: [],
  loading: "idle",
  error: null,
};

export const FetchProduct = createAsyncThunk(
  "ProductSlice/FetchProduct",
  async (prefix) => {
    const res = await api.get(`/products?cat_prefix=${prefix}`);
    return res.data;
  },
);

export const ProductSlice = createSlice({
  initialState: initialState,
  name: "ProductSlice",
  reducers: {
    MaxHandle: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.max > 0) {
        product.max -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProduct.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(FetchProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(FetchProduct.rejected, (state, action) => {
        state.loading = "failed";
        state.error =
          action.payload || action.error.message || "Something went wrong";
      });
  },
});

export const { MaxHandle } = ProductSlice.actions;

export default ProductSlice.reducer;
