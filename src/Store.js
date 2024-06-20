import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

let intialValue={
    cartCount:0,
    cartData:[]
}
let cartSlice = createSlice({
    name:'Cart',
    initialState:intialValue,
    reducers:{
        // actions
        increaseCount:(state,action)=>{
              state.cartCount +=action.payload
        },
        addItem:(state,action)=>{
            state.cartData.unshift(action.payload)
        },
        deleteItem:(state,action)=>{
            state.cartData = state.cartData.filter(function(ele){
                return ele.card.info.id !== action.payload
            })
            state.cartCount -=1
        }
    }
})
console.log(cartSlice)

// 2) configurestore method in redux
export let {increaseCount,addItem,deleteItem} = cartSlice.actions 
export let store = configureStore({
    reducer:{
         cart:cartSlice.reducer
    }
})
console.log(store)