
class customAPIerror extends Error {
    constructor (statusCode , message){
        super(message);
        this.statusCode = statusCode;
    }
}
const createCustom = (statusCode , message)=>{
    new customAPIerror(statusCode, message);
}
module.exports ={
    createCustom,
    customAPIerror
}