const conectDB = require("./db/connect");
const express = require("express");
const app = express();
const task =require("./routes/routes");
//using jsoon file
app.use(express.json());
//task routes and functions
app.use("/api/v1/task",task);
const port = 3000;
const start =async()=>{
    try {
        await conectDB();
        app.listen(port,
            console.log(`Server is listening in port: ${port}...`)
        )
    } catch (error) {
        console.log(error)
    }
}
start();