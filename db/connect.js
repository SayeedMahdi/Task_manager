const mongoose = require("mongoose");

const conectDB = (url) =>{
    return mongoose
            .connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
}
 module.exports = conectDB;