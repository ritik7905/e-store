import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    number: (state) => {
      state.value = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { number } = cartSlice.actions;

export default cartSlice.reducer;
