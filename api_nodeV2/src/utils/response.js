const successResponse=(res,data,message='ok',status=200)=>{
    return res.status(status).json({
        ok:true,
        message,
        data
    });
};
const errorResponse=(res,error,status=500)=>{
    return res.status(status).json({
        ok:false,
        error
    });
};
module.exports={
    successResponse,
    errorResponse
}