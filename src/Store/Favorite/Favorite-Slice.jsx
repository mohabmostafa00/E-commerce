import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("favorites");

const initialState = saved ? JSON.parse(saved) : [];

export const FavoriteSlice = createSlice({
  name: "FavoriteList",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },

    deleteFavorite: (state, action) => {
      const newFav = state.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("favorites", JSON.stringify(newFav));
      return newFav;
    },

    clearFavorites: () => {
      localStorage.removeItem("favorites");
      return [];
    },
  },
});

export const {
  addFavorite,
  deleteFavorite,
  clearFavorites,
} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;