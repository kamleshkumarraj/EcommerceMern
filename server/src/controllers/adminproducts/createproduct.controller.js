import { productsModel } from "../../models/products.model.js"
import ErrorHandler from "../../errors/errorHandler.js"
import { asyncHandler } from "../../errors/asynHandler.js"

const createProduct = asyncHandler(async (req , res , next) =>{
    const product = await productsModel.create(req.body)
    if(product){
       return res.status(400).json({
           success : true,
           msg : "products created successfully",
           product
        })
    }
       return next(new ErrorHandler("Products created fialed",401))
   
   })
export default createProduct;