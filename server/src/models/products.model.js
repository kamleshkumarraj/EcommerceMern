import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please enter product name"]
    },
    description : {
        type : String,
        required :[true , "Please enter product description"]
    },
    price : {
        type : Number,
        required : [true , "Please enter product price"],
        maxLength : [89 , "price cannot exceed 8 character"]
    },
    rating : {
        type : Number,
        default : 0
    },
    thumbnail :{
        type : String,
        required : [true , "Please enter product thumbnail"],
        default : 'https://photos.google.com/photos.jpg'
    },
    images :[{
        public_id : {
            type : String,
            required : true,
            default : 'bcjhdsbfjhbd8238t4rhbfvb'
        },
        url :{
            type : String,
            required : true,
            default : 'https://ecommerce/myImage/image.png'
        }
        }],
    category : {
        type : String,
        required : [true , "Please enter product category"]
    },
    stock : {
        type : Number,
        required : [true , "please enter product stock"],
        maxLength : [4 , "stock cannot exceed 4 characters"]
    },
    created_By : {
        user_Id :{ 
            type : mongoose.Schema.ObjectId,
            ref : "userModels",
            required : [true , "user id must be required"]
        }
    },
    reviews : [
        {
            name : {
                type : String,
                required : true
            },
            rating : {
                type : Number,
                required : true
            },
            user : {
                type : mongoose.Schema.ObjectId,
                ref : "usersModel",
                required : true
            },
            comment : {
                type :String,
                
            }
        }
    ]
},{timestamps : true})

export const productsModel = mongoose.model('product' , productSchema) 