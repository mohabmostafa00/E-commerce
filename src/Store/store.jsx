import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Categories/categorySlice";
import ProductSlice from "./Products/productSlice";
import cartSlice from "./Cart/cartSlice";
import FavoriteSlice from "./Favorite/Favorite-Slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    product: ProductSlice,
    cart: cartSlice,
    Favorite: FavoriteSlice,
  },
  devTools: true,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
});
