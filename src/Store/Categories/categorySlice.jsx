import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api/axios";

const initialState = {
  categories: [],
  loading: "idle",
  error: null,
};

export const FetchCategories = createAsyncThunk(
  "categorySlice/FetchCategories",
  async () => {
    const res = await api.get("/categories");
    return res.data;
  },
);

export const categorySlice = createSlice({
  initialState: initialState,
  name: "categorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(FetchCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.categories = action.payload;
      })
      .addCase(FetchCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.error =
          action.payload || action.error.message || "Something went wrong";
      });
  },
});

// export const {clean} = categorySlice.actions;

export default categorySlice.reducer;
