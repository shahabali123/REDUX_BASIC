import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};


export const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        showData: (state)=>{
            state.value = state.value;
        },
        increment: (state)=>{
            state.value += 1;
        }, 
        decrement: (state)=>{
            state.value -= 1;
        },
        multiply: (state)=>{
            state.value *= 2;
        },
        divide: (state)=>{
            state.value /= 2;
        },
        addByValue: (state, action)=>{
            state.value += action.payload;
        }
    }
})

export const { showData, increment, decrement, multiply, divide , addByValue} = showSlice.actions;
export default showSlice.reducer;