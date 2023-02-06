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
     let _cart= state.cart.filter((item)=>{
        return item.id !==action.payload.id
      })
      state.cart= _cart;
    },
    increaseQty:(state,action)=>{
      state.cart.map((item)=>{
        if(item.id===action.payload.id){
          item.quantity =item.quantity + 1;
        }
      })
    },
    decreaseQty:(state, action)=>{
      state.cart.map((item)=>{
        if(item.id===action.payload.id){
          item.quantity>1 ? item.quantity =item.quantity - 1 : cartSlice.caseReducers.removeProducts(state,action);
        }

      }) 
    }
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
export const { addProducts, removeProducts, increaseQty, decreaseQty } = cartSlice.actions;
