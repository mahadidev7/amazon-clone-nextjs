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
    addToProduct: (state, action) => {
      state.products = action.payload
    },
    addToCart: (state, action) => {
      state.carts = [...state.carts, action.payload]
    },
    addToBasket: (state, action) => {
      state.baskets = [...state.baskets, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.baskets.findIndex(
        (basketItem)=> basketItem.id === action.payload.id 
      )
     const newBasket = [...state.baskets]

      if(index >= 0) {
        // The item exists in the basket... remove it from the basket
        newBasket.splice(index, 1);
      }else{
        console.warn(`can not remove product (id: ${action.payload.id}) from basket`)
      }
      state.baskets = newBasket;
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (cartItem)=> cartItem.id === action.payload.id 
      )

     const newCart = [...state.carts]

      if(index >= 0) {
        // The item exists in the basket... remove it from the basket
        newCart.splice(index, 1);
      }else{
        console.warn(`can not remove product (id: ${action.payload.id}) from cart`)
      }
      state.carts = newCart;
    },
  },
});

//Global action slice function
export const { addToProduct, addToCart, addToBasket, removeFromBasket, removeFromCart } = basketSlice.actions;

// Selectors - This is a Global State object
export const selectProducts = (state) => state.basket.products;
export const selectCarts = (state) => state.basket.carts;
export const selectBaskets = (state) => state.basket.baskets;

export default basketSlice.reducer;
