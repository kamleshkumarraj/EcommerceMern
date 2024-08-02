import { Router } from 'express';
import createProduct from '../../controllers/adminproducts/createproduct.controller.js';
import { updateProducts } from '../../controllers/adminproducts/updateProduct.controller.js';
import { deleteProduct } from '../../controllers/adminproducts/deleteproduct.controller.js';
import { singleProduct } from '../../controllers/adminproducts/getsingleproduct.controller.js';
import { getAllProducts } from '../../controllers/adminproducts/getallproducts.controller.js';

export const products = Router();

products.route('/new').post(createProduct);

products.route('/:id').put(updateProducts).delete(deleteProduct).get(singleProduct)

products.route('/').get(getAllProducts)