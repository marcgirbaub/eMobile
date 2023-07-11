import { createSlice } from "@reduxjs/toolkit";

export const initialMobilesState = {
  cart: localStorage.getItem("cart") ? Number(localStorage.getItem("cart")) : 0,
};

const mobilesSlice = createSlice({
  name: "mobiles",
  initialState: initialMobilesState,
  reducers: {
    addMobileToCart: (currentState) => ({
      ...currentState,
      cart: currentState.cart + 1,
    }),
  },
});

export const mobilesReducer = mobilesSlice.reducer;
export const { addMobileToCart: addMobileToCartActionCreator } =
  mobilesSlice.actions;
