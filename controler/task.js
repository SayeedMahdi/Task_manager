const Task = require("../models/task_model");
const getAlltask = async (req,res)=>{
   try{
    const tasks = await Task.find({});
    res.status(200).json({task});
   }catch(e){
       res.status(500).json({e});
   }
}
const creatlTask =async (req,res)=>{
    try{
    const task = await Task.create(req.body);
    res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}
const getSingletask = (req,res)=>{
    res.json({"id":req.params.id});
}
const updateTask = (req,res)=>{
    res.send("update tasks in forlder");
}
const deleteTask = (req,res)=>{
    res.send("delete tasks in forlder");
}
module.exports ={
    getAlltask,
    creatlTask,
    updateTask,
    getSingletask,
    deleteTask
}