import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            // In previous Vanilla Redux ;- Dont mutate state, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState; 

            // Redux Toolkit uses immer Behind the scenes
            // mutating the state here :- we are just modifying state itself , now returning is not mandatory redux does it by itself 
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            // console.log(state); // it will show some proxyobject
            // console.log(current(state)); // {items: Array(0)}
            // state = [];
            // console.log(state);
            // state = ["Akshay"] -> You are not mutating the state you are just adding a refernce to it
            state.items.length = 0; // state = [] 
            // return { item: [] }; // this new object wil be replaced inside originalState = { items: []}
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;    // this is reactredux toolkit I am not writing it myself
export default cartSlice.reducer;