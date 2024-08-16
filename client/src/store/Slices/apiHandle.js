import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name : 'api',
    initialState : {
        apiStatus : false,
        apiResponse : {}
    },
    reducers : {
        setApiStatus : (state , action) => {
            state.apiStatus = action.payload
        },
        setApiResponse : (state , action) => {
            state.apiResponse = action.payload
        },
        
    }
})

export const apiReducer = slice.reducer;
export const {setApiStatus , setApiResponse} = slice.actions;