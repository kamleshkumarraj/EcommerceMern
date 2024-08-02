import { app } from "./app.js";
import dotenv from 'dotenv';
import connectdb from "./db/dbConnection.js";

//now we handle uncaught errors.
process.on("uncaughtException" , (err) =>{
    console.log(`Error : uncaught exception ${err}`);
    process.exit(1)
})

dotenv.config({
    path :'./src/.env'
})

connectdb()
.then(() =>{
    app.listen(process.env.PORT || 3000 ,() =>{
        console.log(`server listening on ${process.env.PORT || 3000}`)
    })
})

//promise unresolved error handling.
process.on("unhandledRejection", (err) =>{
    console.log(`Error : unhandledRejection ${err}`)
    process.exit(1)
  })

