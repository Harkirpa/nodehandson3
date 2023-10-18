const express=require("express");
const categoryRouter=require('./categoryRouter')
const PORT=5000
const app=express();

const middleware1=(req,res,next)=>{
    console.log("middleaware1")
}
// const middleware2=(req,res,next)=>{
//     console.log("middleaware2")
// }
// const middleware3=(req,res,next)=>{
//     console.log("middleaware3")
// }
app.use(middleware1)
app.get('/',(req,res)=>{
    res.send('API is running fine')
});
app.listen(PORT,()=>{
    try{
        console.log('server is running on Port No. 5000')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})