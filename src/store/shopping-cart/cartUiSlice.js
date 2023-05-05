import { createSlice } from "@reduxjs/toolkit";

// Create cart UI slice with initial state of cart visibility
const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    // Toggle cart visibility
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;