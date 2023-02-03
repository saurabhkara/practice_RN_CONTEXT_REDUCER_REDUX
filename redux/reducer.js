import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        counter:0
    },
    reducers:{
        increment:(state)=>{
            state.counter +=1
        },
        decrement :(state)=>{
            state.counter -=1
        },
        incrementByUnits:(state, action)=>{
            state.counter +=action.payload
        }
    }
})

export default cartSlice.reducer;
export const {increment, decrement, incrementByUnits} = cartSlice.actions;