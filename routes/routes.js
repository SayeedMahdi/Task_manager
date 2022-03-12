const express = require("express");
const route = express.Router();
const {getAlltask,creatlTask,deleteTask,getSingletask,updateTask} = require("../controler/task");
route.route("/").get(getAlltask).post(creatlTask);
route.route("/:id").get(getSingletask).patch(updateTask).delete(deleteTask);
module.exports =route;