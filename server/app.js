import express from "express";
const app=express();
app.use(express.json()) //This line import for post,put,delete apis
const PORT=5001;
app.post("/page",(req,res)=>{
    let userData=req.body
    console.log(userData)
    res.json(userData)
    //or
   // res.json({msg:"user paged successfully"})
});
app.listen(PORT,()=>{
console.log(`Server is Running at http://localhost:${PORT}`);
});