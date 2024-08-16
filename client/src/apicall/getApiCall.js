import Axios from "axios"
import {  setUser } from "../store/Slices/selfDetails"
import { setApiResponse, setApiStatus } from "../store/Slices/apiHandle"

export const getApiCall = (url) => async (dispatch) =>{
    dispatch(setApiResponse(undefined))
    const tocken = localStorage.getItem('tocken')
    
        try{
            dispatch(setApiStatus(true))
            const response = await Axios.get(`${url}?tocken=${tocken}`)
            dispatch(setApiStatus(false))
            const {success , message , user} = response.data;
            dispatch(setApiResponse({success , message}))
            dispatch(setUser(user))
            console.log(response.data)
        }
        catch(err){
            dispatch(setApiStatus(false))
            const {success , message} = err.response.data;
            dispatch(setApiResponse({success , message}))
        }
    }
    
