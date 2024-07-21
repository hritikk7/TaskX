const express = require("express");
let dotenv = require("dotenv").config();

const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/tasksRoutes.js");
const verifyToken = require("./middlewares/authMiddleware");
//initialise express instance
const app = express();
console.log("process.env", process.env.port);

//connect db
connectDB();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test working");
});

//user routes
app.use("/api/user", userRoutes);
app.use("/api/", verifyToken, taskRoutes);

app.listen(PORT, () => {
  console.log("listning on port : ", PORT);
});
