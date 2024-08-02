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
    images :[{
        public_id : {
            type : String,
            required : true
        },
        url :{
            type : String,
            required : true
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
    reviews : [
        {
            name : {
                type : String,
                required : true
            },
            rating : {
                type : Number,
                required : true
            }
        }
    ]
},{timestamps : true})

export const productsModel = mongoose.model('product' , productSchema) 