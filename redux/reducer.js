import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actioncCreator";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    products: [],
    cart: [],
  },
  reducers: {
    addProducts: (state, action) => {
    let item ={
      id:action.payload.id,
      title : action.payload.title,
      price:action.payload.price,
      image:action.payload.image,
      quantity:1
    }
    let check=false;
    state.cart.map((prod)=>{
        if(prod.id===item.id){
          prod.quantity= prod.quantity +1;
          check=true
        }
    })

    if(!check){
      state.cart.push(item);
    }
    
    },
    removeProducts: (state, action) => {
      state.cart.pop();
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = "error occured";
    },
  },
});

export default cartSlice.reducer;
export const { addProducts, removeProducts } = cartSlice.actions;
