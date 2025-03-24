const express = require("express");
const app = express();



const mongoose =  require("mongoose")

require("dotenv").config();

// const {DBconnection}  = require('./Utils/db');
const bodyparser = require("body-parser");

const route = require("./route/customerRoute")
const depositeRoute = require("./route/depositeRoute")

const cors = require("cors");
app.use(express.static("public"));
    
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data

   mongoose.connect("mongodb+srv://dehariyanaval2000:24aK85UCd1Dq8doz@cluster0.95vii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
     console.log("DB CONNECTED");
   });
    app.use("/upload", express.static("upload"));
app.use(cors());

app.use("/customer", route);
app.use("/customer", depositeRoute);


app.listen(2000,()=>{
    console.log("server is runiing on 2000 port")
})