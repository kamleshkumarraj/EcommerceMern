import { asyncHandler } from "../../errors/asynHandler.js";
import { userModels } from "../../models/userRegistration.model.js";
import bcrypt from 'bcrypt'
import { storetokenAndGetJWT } from "../../utils/storeJWTincookie.js";
//controllers for user registrations
export const registrationContoller = asyncHandler(async (req , res) =>{
    //registration process.
    //step 1 : check user is alredy registered or not. that is alredy verified from userSchema.

    const user = await userModels.create(req.body)
    storetokenAndGetJWT(res,user,201)  
})