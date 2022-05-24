const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = 5000;

app.use(express.json());
app.use(cors());
const mongoURL = process.env.MONGO_URL;

// mongodb connect-----------------------------------------------
mongoose.connect(mongoURL, (err) => {
  if(err) {
    console.log("Something error happened, check again")
  }else{
    console.log("Succesfully connected to Mongodb!");
  }
})
// -------------------------------------------------------------


app.get("/", (req, res) => {
  res.send("TEST!")
});

app.listen(PORT, () =>{
  console.log("Teddy is running 🐶")
})