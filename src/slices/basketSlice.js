import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts:[],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.products = action.payload
    },
    addToCarts: (state, action) => {
      state.carts = [...state.carts, action.payload]
    },
  },
});

//Global slice function
export const { addToBasket, addToCarts } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProducts = (state) => state.basket.products;
export const selectCarts = (state) => state.basket.carts;

export default basketSlice.reducer;
