import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import mahadiReducer from "../slices/mahadiSlice";

// THE GLOBAL STORE SETUP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    mahadiAlert: mahadiReducer
  },
});
