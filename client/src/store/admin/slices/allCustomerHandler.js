import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name : 'users',
    initialState : {
        apiStatus : false,
        apiResponse : {},
        users : []
    },
    reducers  : {
        setAllUsers  :(state , action) => {
            state.users = [...action.payload]
            return state;
        },
        setOneUser : (state ,action) => {
            state.users.push(action.payload)
            return state
        }
    }
})

export const getAllUsers = (state) => state.allUsers.users
export const userHandleReducer = slice.reducer;
export const { setAllUsers , setOneUser} = slice.actions;
