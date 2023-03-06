import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/addToCart";

export const store = configureStore({
  reducer: {
    addToCart: cartSlice.reducer,
  },
});
