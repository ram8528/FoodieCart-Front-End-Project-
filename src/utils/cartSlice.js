import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            // mutating the state here :- we are just modifying state itself
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;    // this is reactredux toolkit I am not writing it myself
export default cartSlice.reducer;