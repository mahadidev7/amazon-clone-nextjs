import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: 0,
  message:"",
};

export const mahadiSlice = createSlice({
  name: "mahadiAlert",
  initialState,
  reducers: {
    getmessage: (state, action) => {
      state.server = action.payload.server
      state.message = action.payload.message
    },
  },
});

//Global slice function
export const { getmessage } = mahadiSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectServer = (state) => state.mahadiAlert.server;
export const selectMessage = (state) => state.mahadiAlert.message;

export default mahadiSlice.reducer;
