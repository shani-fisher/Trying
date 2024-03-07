const Users=require('../models/tasks')
const mongodb=require('mongodb')
//   const   UsersList=[
//         { FirstName: "שני", LastName: "פישר", Id: "326201753", Teacher: 0, phone: "0504108916" },
//         { FirstName: "צביה", LastName: "לוי", Id: "326201759", Teacher: 0, phone: "0548545131" },
//         { FirstName: "אילה", LastName: "צדוק", Id: "326201755", Teacher: 0, phone: "0533143970" },
//         { FirstName: "עדינה", LastName: "שטיינברג", Id: "326201756", Teacher: 1, phone: "0545859569" },

//     ]
    exports.getAllUsers = async(req,res)=>{
       const users=await Users.find();
       res.json(users)
        }
        exports.deleteUserById=(req,res)=>{
  const {Id}=req.params;
  const index = UsersList.findIndex(user => user.Id === Id);
  if (index != -1) {
      
      UsersList.splice(index,1);
      return res.status(200).json({massege:"user deleted sucseed",UsersList:UsersList})
  }
  else
      return res.status(404).json({massege:"the user is not exist"})
        }
exports.addUser=async(req,res)=>{
    const {newUser}=req.body;
    // const s=Users.find(user => user.Id === newUser.Id) ;
    // if (!s) {
    //     {
      const user= await Users.create(newUser);
            return res.status(200).json({massege: "the user is added",user});
    //     }
    // }
    // else
    //    return res.status(404).json({massege:"the user is already exist"});
}
exports.updateUserById=(req,res)=>{
    const {Id,FirstName,LastName}=req.body;
    const index = UsersList.findIndex(user => user.Id ===Id);
            if(index!=-1)
            {UsersList[index].FirstName =FirstName;
            UsersList[index].LastName = LastName;
            return res.status(200).json({massege: "the user is updated",UsersList:UsersList[index]});
            }
            return res.status(404).json({massege:"the Id isnot exist"});            
}
        // exports.createEmployee=(req,res)=>{
        //     employeesList.push(req.body)
        //     res.send(employeesList)
        // }
        
        // exports.getEmployeeById=(req,res)=>{
        //     const {id} = req.params
        //     console.log(req.params);
        // const emp = employeesList.find(x=>x.id===id)
        // if(!emp)
        // {
        //     res.status(404).json({massege:"emp not found"})
        // }
        // res.send(emp)
        // }

