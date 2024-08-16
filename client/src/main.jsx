import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from './pages/Home.page.jsx';
import Error from './pages/Error.page.jsx';
import ProductDetails from './pages/ProductDetails.page.jsx';
import CartList from './pages/CartList.page.jsx';
import Wishlist from './pages/Wishlist.page.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'
import './style.css'
import ProductList from './pages/ProductList.jsx';
import ProductsDetails from './pages/ProductDetails.page.jsx';
import MarketPage from './pages/MarketPage.jsx';
import DeliveryForm from './components/BuyNow.jsx';
import Login from './components/Login.jsx';
import SignIn from './components/SignIn.jsx';
import MyProfile from './components/MyProfile.jsx';
import Orders from './components/orders/components/Orders.jsx';
import AddProducts from './components/addproducts/components/AddProducts.jsx';
import Customers from './components/customers/components/Customers.jsx';
import Products from './components/products/components/Products.jsx';
import Dashbord from './pages/Dashbord.jsx';
import DashbordComp from './components/DashbordComp.jsx';


const router = createBrowserRouter([{
  path : '/',
  element : <App />,  
  errorElement : <Error />,
  children : [
    {
      path : '/',
      element : <Home />,
    },
   {
      path : '/product-details',
      element : <ProductDetails />
   },
   {
      path : '/login',
      element : <Login />
   },
   {
      path : '/signin',
      element : <SignIn />
   },
   {
      path : '/my-profile',
      element : <MyProfile />
   },
   {
      path : '/cart-pages',
      element : <CartList />
   },
   {
      path : '/wishlist-pages',
      element : <Wishlist />
   },
   {
      path : '/:productlist-pages',
      element : <ProductList />
   },
   {
      path : '/:productlist-pages/:product-details',
      element : <ProductsDetails /> 
   },
   {
      path : '/:productlist-pages/:product-details/:buy-page',
      element : <DeliveryForm />
   },
   {
      path : '/market-place',
      element : <MarketPage />
   },
   {
   path :  '/admin',
   element : <Dashbord />,
   children : [{
      path : '/admin/dashbord',
      element : <DashbordComp />
   },
      
   {
      path : '/admin/products',
      element : <Products />
    },
    {
      path : '/admin/orders',
      element : <Orders />
    },
    
    {
      path : '/admin/customers',
      element : <Customers />
    },
    {
      path : '/admin/products/add-products',
      element : <AddProducts />
    }
  ]
  
  
   }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
