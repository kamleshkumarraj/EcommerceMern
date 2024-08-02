import { userModels } from "../../models/userRegistration.model.js";
import bcrypt from 'bcrypt'
//controllers for user registrations
export const registrationContoller = (req , res) =>{
    //registration process.
    //step 1 : check user is alredy registered or not.
      userModels.findOne({email : req.body.email}).exec()
      .then((user) =>{
        if(user) {
            res.status(400).json({
                msg : "user is already registered"
            })
            }
            else{
                const salRound = 10;
                //process for hashing the password.
                bcrypt.hash(req.body.password, salRound)
                .then((hashPass) =>{
                    const saveData = new userModels({...req.body , password : hashPass})

                    saveData.save()
                    .then(() =>{
                        res.status(200).json({
                            msg : "Registration successfull"
                        })
                    })
                    .catch((err) =>{
                        res.status(400).json({
                            msg : "Registration is failed",
                            error : err.errmsg
                        })
                    })
                })
                
            }
      })
      
   
}