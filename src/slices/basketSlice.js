import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {

    addToProduct: (state, action) => {
      state.products = action.payload
    },

    addToCart: (state, action) => {
      const result = state.products.find((item) => item.id === action.payload.id);
      result.cart = true
    },

    updateToCartQuantity: (state, action) => {
      if(action.payload.type === "increment"){
        const result = state.products.find((item) => item.id === action.payload.id);
        result.totalPrice = result.totalPrice + result.price,
        result.quantity = result.quantity + 1
      }
      if(action.payload.type === "decrement"){
        const result = state.products.find((item) => item.id === action.payload.id);
        result.totalPrice = result.totalPrice - result.price,
        result.quantity = result.quantity - 1
      }
    },

    updateToCartshopping: (state, action) => {
      if(action.payload.type === "true"){
        const result = state.products.find((item) => item.id === action.payload.id);
        result.shipping = true
      }
      if(action.payload.type === "false"){
        const result = state.products.find((item) => item.id === action.payload.id);
        result.shipping = false
      }
    },

    removeFromCart: (state, action) => {
    const result = state.products.find((cart)=> cart.id === action.payload.id )
    result.cart = false;
    //  const newCart = [...state.products]
      // if(index >= 0) {
      //   The item exists in the basket... remove it from the basket
      //   newCart.splice(index, 1);
        
      // }else{
      //   console.warn(`can not remove product (id: ${action.payload.id}) from cart`)
      // }
      // state.carts = newCart;
    },

    addBookMarkProduct: (state, action) => {
        const Data = state.products.find((item) => item.id === action.payload.id);
        Data.save = true
    },

    cancelBookMarkProduct: (state, action) => {
      const Data = state.products.find((item) => item.id === action.payload.id);
      Data.save = false
    },

  },
});

//Global action slice function
export const { addToProduct, addToCart, updateToCartQuantity, removeFromCart, updateToCartshopping, addBookMarkProduct, cancelBookMarkProduct } = basketSlice.actions;

// Selectors - This is a Global State object
export const selectProducts = (state) => state.basket.products;
export const selectCarts = (state) => state.basket.carts;
export const selectBookMarks = (state) => state.basket.bookmarks;

export default basketSlice.reducer;
