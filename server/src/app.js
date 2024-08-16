import express from 'express';
import cookieParser from 'cookie-parser';
import ErrorHandler from './errors/errorHandler.js';
import { productsAdminHandleRoute } from './routes/admin/products.route.js';
import { authenticationRoute } from './routes/Authentication/auth.route.js';
import { adminHandleUserRoute } from './routes/admin/users.route.js';
import { handleUserProfileRoute } from './routes/userSelf/userHandleProfile.route.js';
import { productHandleByUser } from './routes/productsUserRoute/productHandleByUser.route.js';
import { orderHandlerRouter } from './routes/ordersRoute/order.route.js';
import { orderHAndleByAdminRoute } from './routes/admin/orderHandle.route.js';
import cors from 'cors';

export const app = express();


app.use(
  express.json({
    limit: '200kb',
  }),
);

const corsOptions = {
  origin: 'http://localhost:5173', // Frontend ka origin
  credentials: true, // Access-Control-Allow-Credentials
};
app.use(cookieParser())
app.use(cors(corsOptions));

app.use('/api/v2/auth', authenticationRoute);
app.use('/api/v2/admin/product',productsAdminHandleRoute)
app.use('/api/v2/admin/user',adminHandleUserRoute)

app.use('/api/v2/user',handleUserProfileRoute)
app.use('/api/v2/user/product',productHandleByUser)
app.use('/api/v2/user/order',orderHandlerRouter)
app.use('/api/v2/admin/order',orderHAndleByAdminRoute)
//that is error handler middleware at normal error during api calling.
app.use((err,req , res , next) =>{
  err.status = err.status || 500;
  err.message = err.message || "Interval server error"
  // now e handle mongodb cast errors;
  if(err.name == 'castError'){
    new ErrorHandler(`Resources not found ${err.path}`,500)
  }
  res.status(err.status).json({
    success : false,
    message : err.message
  })
})

//now we handle promiseRejection erros.
