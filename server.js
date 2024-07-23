const express= require('express')
const dotEnv=require('dotenv')
const mongoos =require('mongoose')
const bodyParser=require('body-parser')
const empRouter=require('./routes/employeeRoutes')
const cors=require('cors')

const app=express();


const port =process.env.port || 2400

dotEnv.config();

mongoos.connect(process.env.Mongo_URI).then(()=>{
    console.log("mongo db connection successful");
})
.catch((err)=>{
    console.log("error",err);
})

// middlewares

app.use('/employees',bodyParser.json(),empRouter)
app.use(cors());






app.listen(port,()=>{
    console.log(`server started at ${port}`);

})

