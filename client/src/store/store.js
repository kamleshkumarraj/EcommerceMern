import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Slices/ProductList";
import { cartItemReducer } from "./Slices/AddCart";
import { wishlistReducer } from "./Slices/WishlistItem";
import { categoryReducers } from "./Slices/AllCategoryProducts";
import { meReducer } from "./Slices/selfDetails";
import { userHandleReducer } from "./admin/slices/allCustomerHandler";

const store = configureStore({
    reducer : {
        productList : productsReducer,
        cartList : cartItemReducer,
        wishlist : wishlistReducer,
        categoryProducts : categoryReducers,
        me : meReducer,
        allUsers : userHandleReducer
    }
})

export default store;

// now we create selector
