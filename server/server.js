const express = require("express")
let dotenv = require("dotenv").config();

const connectDB =  require("./config/db.js")
const PORT = process.env.PORT || 5000

//initialise express instance
const app = express();
console.log("process.env", process.env.port);

//connect db
connectDB()


app.get('/', (req, res)=>{
    res.send("test working")
})

app.listen(PORT, ()=>{
    console.log("listning on port : ", PORT);
})