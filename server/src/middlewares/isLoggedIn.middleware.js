// now we write code for checking the user is logged in or not using verify the tocken;

import { asyncHandler } from "../errors/asynHandler.js";
import jwt from 'jsonwebtoken';
import ErrorHandler from "../errors/errorHandler.js";
import { userModels } from "../models/userRegistration.model.js";

const isLoggedIn = asyncHandler(async (req , res , next) =>{
   console.log("running login ...")
    let tocken = await req.cookies['tocken'];
    console.log(JSON.stringify(req.cookies))
      console.log(tocken)
      tocken =  tocken ? tocken : req.query.tocken
      console.log(tocken)

    if(!tocken){
        return next(new ErrorHandler("Please login to access this resource" , 405))
    }
     try{
        const decodedData = jwt.verify(tocken , process.env.JWT_SECRET)
        req.user = await userModels.findById(decodedData.id);
        next();
     }
     catch(err){
        next(new ErrorHandler(err.stack , 404))
     }

    
})

export default isLoggedIn