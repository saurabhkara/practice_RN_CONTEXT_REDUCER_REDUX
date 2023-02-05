import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actioncCreator";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        isLoading:false,
        products:[],
        cart:[],
    },
    reducers:{
        addProducts:(state, action)=>{
            state.cart.push(action.payload)
        },
        removeProducts :(state, action)=>{
            state.cart.pop()
        }
    },
    extraReducers:{
        [getProducts.fulfilled]:(state, action)=>{
            state.products = action.payload;
            state.isLoading = false
        },
        [getProducts.pending]:(state, action)=>{
            state.isLoading = true;
        },
        [getProducts.rejected]:(state, action)=>{
            state.isLoading = false;
            state.error = 'error occured'
        }
    }
})

export default cartSlice.reducer;
export const {increment, decrement, incrementByUnits} = cartSlice.actions;