const mongoose=require("mongoose");
const UsersSchema=new mongoose.Schema({
    FirstName: String, LastName: String, Id: String, Teacher: Boolean, phone: String 
})
module.exports=mongoose.model('Users',UsersSchema)