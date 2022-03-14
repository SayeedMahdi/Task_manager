const express = require("express");
const router = express.Router();
const {
    getAlltask,
    creatlTask,
    deleteTask,
    getSingletask,
    updateTask} = require("../controler/tasks");
router.route('/').get(getAlltask).post(creatlTask);
router.route('/:id').get(getSingletask).patch(updateTask).delete(deleteTask);
module.exports =router;