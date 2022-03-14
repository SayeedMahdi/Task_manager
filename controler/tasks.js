const Task = require("../models/task_model");
const getAlltask = async (req,res)=>{
   try{
    const tasks = await Task.find({});
    res.status(200).json({tasks});
   }catch(err){
       res.status(500).json({err});
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
const getSingletask = async (req,res)=>{
    const {id:taskID}=req.params;
    try{
    const task=await Task.findOne({_id:taskID});
    if(!task){
        return res.status(404).json({msg:"No task find with that id."})
    }
    res.status(200).json({task});
}catch(err){
    res.status(500).json({msg:err})
}
}
const updateTask =async (req,res)=>{
    const {id:taskID} = req.params;
    try{
        const task =await Task.findOneAndUpdate({_id:taskID},req.body,{
            new :true,
            runValidators:true
        });
        if(!task){
            res.status(404).json({msg:`no task with that id: ${taskID}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({err})
    }
}
const deleteTask = async(req,res)=>{
    const {id:taskID}=req.params;
    try{
        const task =await Task.findOneAndDelete({_id:taskID});
        if(!task){
            res.status(404).json({msg:`no task find with id: ${taskID}`});
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}
module.exports ={
    getAlltask,
    creatlTask,
    updateTask,
    getSingletask,
    deleteTask
}