import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name :'user',
    initialState : {
        me : {},
    },
    reducers : {
        setUser : (state , action) => {
            state.me = action.payload
        },
    }
})

export const getMyDetails = (state) =>  state.me;

export const meReducer = slice.reducer

export const { setUser } = slice.actions;