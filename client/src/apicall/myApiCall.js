
import { setApiResponse, setApiStatus } from '../store/Slices/apiHandle'
import {   setUser } from '../store/Slices/selfDetails'
import axios from 'axios'

export const myApiCall = (url , data) => async(dispatch) => {
    console.log(data)
    try{
        dispatch(setApiStatus(true))
        const response = await axios.post(url  , data, {withCredentials : true})
        dispatch(setApiStatus(false))
        const {success , message, user , tocken} = response.data;
        dispatch(setApiResponse({success , message}))
        if(success == true) dispatch(setUser(user))
        localStorage.setItem('tocken',tocken)
        return {success , message , user}
    }
    catch(err){
        dispatch(setApiStatus(false))
        console.log(err)
        // const {success , message} = err.response.data;
        // dispatch(setApiResponse({success , message}))
        // return{success, message}
    }
}