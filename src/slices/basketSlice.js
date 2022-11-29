import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts:[],
  baskets:[],
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
    addToBaskets: (state, action) => {
      state.baskets = [...state.baskets, action.payload]
    },
  },
});

//Global action slice function
export const { addToBasket, addToCarts, addToBaskets } = basketSlice.actions;

// Selectors - This is a Global State object
export const selectProducts = (state) => state.basket.products;
export const selectCarts = (state) => state.basket.carts;
export const selectBaskets = (state) => state.basket.baskets;

export default basketSlice.reducer;
