const asyncWraper = (fn)=>{
    return async(req,res,next)=>{
        try{
        await fn(req,res,next)
        }catch(error){
            next(error.message);
        }
    }
} 
module.exports = asyncWraper;