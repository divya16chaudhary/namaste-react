import ecpress from "express";
import {config} from "dotenv"
const app = express();
config({path:"./config/config.env"})
app.get("/", (req,res)=>{
    res.send("hello divya");

})
app.listen(port,)