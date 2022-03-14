const mongoose =require("mongoose");
const task_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"you must write a name"],
        trime:true,
        maxLength:[40,"don't wirte morethan 20 cracter."]
    },
    completed:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model("Task",task_schema);