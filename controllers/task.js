// const TaskType=[
//         {TaskTypeId:1,TaskTypeName:"homework"},
//     {TaskTypeId:2,TaskTypeName:"learn to test" } ,
//     {TaskTypeId:3,TaskTypeName:"do a project" } ,
//     ]
//  const TasksList=[
//      {TaskId:"1",TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
//      {TaskId:"2",TaskTypeId:2,TaskName:"learn to test in data structue",UserTaskId:"326201759",DeadLine:"12/12/2024"},
//      {TaskId:"3",TaskTypeId:3,TaskName:"do a project in python ",UserTaskId:"326201753",DeadLine:"12/12/2024"},
//     ]
const Task=require('../models/Task')
const TaskType=require('../models/TaskType')
    exports.getAllTaskType=async(req,res) =>
    {
        try {
            const taskType = await TaskType.find();
            res.json(taskType);
          } catch (error) {
            console.error('Failed to get users:', error);
            res.status(500).json({ message: 'Failed to get users' });
          }
    };
    exports.getAllTaskList=async(req,res)=> 
    {
        try {
            const tasks = await Task.find();
            res.json(tasks);
          } catch (error) {
            console.error('Failed to get users:', error);
            res.status(500).json({ message: 'Failed to get users' });
          }
    }
    exports.deleteTaskById=async(req,res)=>
    {
        const {Id}=req.params
        console.log(Id);
        try{
            const deletedTask = await Task.findOneAndDelete({ TaskId: Id });
          if (!deletedTask) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json({ message: 'User deleted successfully' });
        }
   
    catch (error)
     {
        console.error('Failed to delete user:', error);
        res.status(500).json({ message: 'Failed to delete user' });
      }
    };
    
    exports.addTaskToTypeList=async(req,res)=>
    {
        const {newType} = req.body
        const taskType = await TaskType.create(req.body);
        res.json(taskType)
    };
    exports.addTask=async(req,res)=>
    {
        const {newTask} = req.body
        const task = await Task.create(req.body);
        res.json(task)
    };
    exports.getTaskById = async (req, res) => {
        const { TaskId } = req.params;
      
        try {
          const task = await Task.findOne({ TaskId });
          if (!task) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json(task);
        } catch (error) {
          console.error('Failed to get user:', error);
          res.status(500).json({ message: 'Failed to get user' });
        }
      };
    