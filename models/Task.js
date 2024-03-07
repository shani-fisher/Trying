const mongoose = require('mongoose')
const TaskSchema=new mongoose.Schema({
    TaskId:String,
    TaskTypeId:Number,
    TaskName:String,
    TaskName:String,
    DeadLine:String,
    UserTaskId:String
})


module.exports=mongoose.model('Task',TaskSchema)