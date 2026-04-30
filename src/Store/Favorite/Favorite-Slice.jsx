import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api/axios";

const saved = localStorage.getItem("favorites");

export const fetchFavorites = createAsyncThunk(
  "FavoriteList/fetchFavorites",
  async () => {
    const res = await api.get("/favoriteList");
    return res.data;
  },
);

export const addFavorite = createAsyncThunk(
  "FavoriteList/addFavorite",
  async (product) => {
    const res = await api.post("/favoriteList", product);
    return res.data;
  },
);
export const deleteFavorite = createAsyncThunk(
  "FavoriteList/deleteFavorite",
  async (id) => {
    await api.delete(`/favoriteList/${id}`);
    return id;
  },
);

export const FavoriteSlice = createSlice({
  initialState: {
    items: saved ? JSON.parse(saved) : [],
    loading: false,
  },
  name: "FavoriteList",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        localStorage.setItem("favorites", JSON.stringify(action.payload));
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      });
  },
});

export default FavoriteSlice.reducer;
