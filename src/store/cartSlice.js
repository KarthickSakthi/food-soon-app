import {createSlice} from "@reduxjs/toolkit"

const cartSlice  = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem :  (state)=>{
            state.items.pop()
        },
        clearCart :(state)=>{
            state.items.length=0
            // state=[] this wont change the original state
            // console.log({state}) log will be []
            // return {items:[]} This will change
            // return [] this will throw an error
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;