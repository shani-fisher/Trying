const express=require("express")
const cors = require('cors');
const mongoose=require("mongoose")
const usersRouter=require("./routers/users")
const bodyParser = require("body-parser")
const app=express();
app.use(cors);
app.use(bodyParser.json())
app.use('/',usersRouter)
const PORT=process.env.PORT||5000;
const CONECTION_URL='mongodb+srv://task:1234@cluster0.ezzzkif.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
    app.listen(PORT,()=>console.log(PORT))
)
