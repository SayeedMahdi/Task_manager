const mongoose = require("mongoose");
const connetionstring ="mongodb+srv://sayeed_mahdi:mahdi@sandbox.opukx.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"
const conectDB = (url) =>{
    return mongoose
            .connect(connetionstring,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
}
 module.exports = conectDB;