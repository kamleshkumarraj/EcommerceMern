import { Router } from 'express';
import createProduct from '../../controllers/admin/createproduct.controller.js';
import { updateProducts } from '../../controllers/admin/updateProduct.controller.js';
import { deleteProduct } from '../../controllers/admin/deleteproduct.controller.js';
import { singleProduct } from '../../controllers/admin/getsingleproduct.controller.js';
import { getAllProducts } from '../../controllers/admin/getallproducts.controller.js';
import isLoggedIn from '../../middlewares/isLoggedIn.middleware.js';
import isAdmin from '../../middlewares/isAdmin.js';

export const products = Router();

products.route('/new').post(isLoggedIn ,isAdmin,createProduct);

products.route('/:id').put(isLoggedIn,isAdmin,updateProducts).delete(isLoggedIn,isAdmin,deleteProduct).get(singleProduct)

products.route('/').get(isLoggedIn,getAllProducts)