const wraperMehtod = require("../middle_ware/async");
const Task = require("../models/task_model");
const {createCustom} = require("../errorHandel/error_Handler");
//Get all tasks
const getAlltask =wraperMehtod( async(req,res)=>{
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  
});

//create a new task
const creatlTask =wraperMehtod(async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

//get a single tasks
const getSingletask = wraperMehtod(async (req,res,next)=>{
    const {id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID});
    if(!task){
        return next(createCustom(404,`no task with that id: ${taskID}`))
    }
    res.status(200).json({task});
});

//update a tasks
const updateTask =wraperMehtod(async (req,res,next)=>{
    const {id:taskID} = req.params;
        const task =await Task.findOneAndUpdate({_id:taskID},req.body,{
            new :true,
            runValidators:true
        });
        if(!task){
            return next(createCustom(404,`no task with that id: ${taskID}`))
        }
        res.status(200).json({task})
});
//delete task
const deleteTask =wraperMehtod( async(req,res,next)=>{
    const {id:taskID}=req.params;
        const task =await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next(createCustom(404,`no task with that id: ${taskID}`))
        }
        res.status(200).json({task})
});

//exports
module.exports ={
    getAlltask,
    creatlTask,
    updateTask,
    getSingletask,
    deleteTask
}