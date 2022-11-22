import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[]
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProducts:(state, action) => {
            state.products = action.payload  
        },
    }
});

//  the Global function slice
export const {addProducts} = basketSlice.actions;

export const selectItems = (state) => state.basket.products;


export default basketSlice.reducer;
