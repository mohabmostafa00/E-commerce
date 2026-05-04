import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data/db.json";

const initialState = {
  categories: data.categories,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
