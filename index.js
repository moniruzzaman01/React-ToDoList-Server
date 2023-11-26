require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/v1/task.router");
const app = express();
const port = process.env.PORT || 5001;

//middle ware
app.use(cors({ origin: "*" }));
app.use(express.json());

//Routers
app.use("/api/v1", taskRouter);

//Default Routes
app.get("/", (req, res) => {
  res.send("To Do is running!!!");
});
//Error Routes
app.get("*", (req, res) => {
  res.send({ status: false, data: "not found!!!" });
});

//Listening port
app.listen(port, () => {
  console.log("listen from", port);
});
