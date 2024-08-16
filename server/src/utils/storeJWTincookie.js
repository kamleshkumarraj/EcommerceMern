export const storetokenAndGetJWT = (res,user,statusCode) =>{
    console.log("Tocken creation running...")
    const tocken = user.getJWTTocken();
    console.log("Tocken created ...")
    const option = {
        expires : new Date(
            Date.now() + process.env.JWT_EXPIRY*60*60*1000
        ),
        httpOnly: true, // JavaScript se access na ho
           // HTTPS par hi send ho (if applicable)
        sameSite: 'None'
       
    }
   console.log("userlogged in")
    //code for store tocken in cookie and then send the request for client.
    res.status(statusCode).cookie('tocken',tocken,option).json({
        success : true,
        message  :"User logged in successfully",
        user,
        tocken
    })
}