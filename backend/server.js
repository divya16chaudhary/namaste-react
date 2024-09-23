import app from "./app.js";

app.listen(process.env.port,()=>{
   console.log(`server is runing port ${process.env.port}`); 
})
