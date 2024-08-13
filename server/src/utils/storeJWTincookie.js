export const storetokenAndGetJWT = (res,user,statusCode) =>{
    const tocken = user.getJWTTocken();
    const option = {
        expires : new Date(
            Date.now() + process.env.JWT_EXPIRY*60*60*1000
        ),
       
    }
    //code for store tocken in cookie and then send the request for client.
    res.status(statusCode).cookie('tocken',tocken,option).json({
        status : "success",
        msg  :"User logged in successfully",
        tocken
    })
}