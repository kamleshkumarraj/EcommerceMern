import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required  :true,
        minlength : 3
    },
    lastname : {
        type : String,
        required  :true,
        minlength : 3
    },
    username : {
        type  :String,
        required : true,
        unique : true,
        minlength : 3
    },
    email : {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
        lowercase: true
    },
    password : {
        type : String,
        minlength : 4,
        required : true
    },
    avatar : {
        type : String,
        required : true
    }
},{timestamps : true})

export const userModels = mongoose.model('user' , userSchema)