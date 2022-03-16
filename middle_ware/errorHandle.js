const {customAPIerror} = require("../errorHandel/error_Handler");
const errorMiddleHandler = (err,req,res,next)=>{
    if(err instanceof customAPIerror){
        return res.status(err.statusCode).json({msg:err.message})
    }
 res.status(err.status).json({msg:err.message});
}
module.exports = errorMiddleHandler;