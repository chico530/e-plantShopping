import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.name !== action.payload.name);
        },
        updateQuantity: (state, action) => {
            const {name, quantity} = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate && quantity !==0) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

export const {addItem, removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;