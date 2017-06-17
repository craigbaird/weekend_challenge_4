// General modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Route Imports
var listings = require ("./routes/listings");

// Database Variables
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/realestate";
var MongoDB = mongoose.connect(mongoURI).connection;

// error connecting to database
MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});

// success connecting to database
MongoDB.once("open", function(){
  console.log("Connected to Mongo");
});

// Port
app.set("port", (process.env.PORT || 5000));

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./server/public"));

// Routes
app.use("/listings", listings);
app.get("/", function(req,res){
  res.sendFile(path.resolve("server/public/views/index.html"));
});

// Listen
app.listen(app.get("port"), function(){
  console.log("Listening on port " + app.get("port") );
});
