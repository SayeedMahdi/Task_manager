const express = require("express");
const app = express();
const tasks =require("./routes/routes");
const conectDB = require("./db/connect");
const notfound = require("./middle_ware/notfound");
require("dotenv").config();
// require("./routes/deploy")(app);
const midlleWareHandler = require("./middle_ware/errorHandle");


//middle where
app.use(express.static("./public"));
app.use(express.json());

//task routes and functions
app.use("/api/v1/tasks",tasks);
//not found status handlling
app.use(notfound);
//error handler
app.use(midlleWareHandler);
//port assing
const port =process.env.PORT || 3000;
const start =async()=>{
    try {
        await conectDB(process.env.url);
        app.listen(port,
            console.log(`Server is listening in port: ${port}...`)
        )
    } catch (error) {
        console.log("this is the error:",error);
    }
}
start();
