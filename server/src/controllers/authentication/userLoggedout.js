import { asyncHandler } from "../../errors/asynHandler.js";

const loggedOut = asyncHandler(async (req , res , next) =>{
 
    // code for expire immeditely to jwt tocken;
    res.cookie('tocken',null,{
        expires: new Date(Date.now()),
        httpOnly : true
    })
    res.status(200).json({
        staus : true,
        msg : "Logged out successfully"
    })
})

export default loggedOut;