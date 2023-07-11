import { createSlice } from "@reduxjs/toolkit";

export const initialMobilesState = {
  cart: 0,
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
export const { addMobileToCart: AddMobileToCartActionCreator } =
  mobilesSlice.actions;
