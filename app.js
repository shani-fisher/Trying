
// require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const userRouter =require('./routers/users')
const tasksRouter =require('./routers/task')
const bodyParser = require('body-parser');
const cors=require('cors')
const app=express();
app.use(cors)
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/tasks', tasksRouter);

const CONECTION_URL=`mongodb+srv://project:1234@cluster0.ezzzkif.mongodb.net/?retryWrites=true&w=majority`
 const PORT=5000;

mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
