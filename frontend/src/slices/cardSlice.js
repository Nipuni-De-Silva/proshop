import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : {cartItems: []};

const cartSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {}
})

export default cartSlice.reducer;