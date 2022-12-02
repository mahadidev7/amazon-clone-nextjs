import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts:[],
  bookmarks:[],
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

    updateToCartQuantity: (state, action) => {
      if(action.payload.type === "increment"){
        const filterCartData = state.carts.find((item) => item.id === action.payload.id);
        filterCartData.totalPrice = filterCartData.totalPrice + filterCartData.price,
        filterCartData.quantity = filterCartData.quantity + 1
      }
      if(action.payload.type === "decrement"){
        const filterCartData = state.carts.find((item) => item.id === action.payload.id);
        filterCartData.totalPrice = filterCartData.totalPrice - filterCartData.price,
        filterCartData.quantity = filterCartData.quantity - 1
      }
    },

    updateToCartshopping: (state, action) => {
      if(action.payload.type === "true"){
        const filterCartData = state.carts.find((item) => item.id === action.payload.id);
        filterCartData.shopping = true
      }
      if(action.payload.type === "false"){
        const filterCartData = state.carts.find((item) => item.id === action.payload.id);
        filterCartData.shopping = false
      }
    },

    removeFromCart: (state, action) => {
    const index = state.carts.findIndex((cart)=> cart.id === action.payload.id )
     const newCart = [...state.carts]
      if(index >= 0) {
        // The item exists in the basket... remove it from the basket
        newCart.splice(index, 1);
      }else{
        console.warn(`can not remove product (id: ${action.payload.id}) from cart`)
      }
      state.carts = newCart;
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
