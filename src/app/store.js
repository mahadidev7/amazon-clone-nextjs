import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import mahadiReducer from "../slices/mahadiSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    mahadiAlert: mahadiReducer
  },
});
