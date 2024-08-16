import { asyncHandler } from "../errors/asynHandler.js";
import ErrorHandler from "../errors/errorHandler.js";

const isAdmin = asyncHandler(async (req , res , next) =>{
    console.log("Running admin")
    console.log(req.user.roles)
    if(!(req.user.roles == 'admin')){
        return next(new ErrorHandler("Only admins are allowed to access this resources" , 402))
    }
    next();
})

export default isAdmin;