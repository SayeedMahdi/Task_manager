const getAlltask = (req,res)=>{
    res.send("all tasks in forlder");
}
const creatlTask = (req,res)=>{
    res.json(req.body);
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