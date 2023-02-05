import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk('products',async()=>{
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
})