import express from 'express';
import { registrationRoute } from './routes/registration/registration.route.js';
import { products } from './routes/adminproducts/products.route.js';
import ErrorHandler from './errors/errorHandler.js';

export const app = express();

app.use(
  express.json({
    limit: '200kb',
  }),
);

app.use('/api/v2', registrationRoute);
app.use('/api/v2/products',products)

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
