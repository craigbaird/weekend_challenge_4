var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var ListingsSchema = mongoose.Schema({
  "rent": Number,
  "sqFt": Number,
  "city": String,
}); // end ListingsSchema

var Listings = mongoose.model("Listings", ListingsSchema);

// get all house listings from database and send to client.js
router.get("/", function(req,res){
  //Get all listings
    Listings.find(function(err, allListings){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allListings);
  });
});

// router.post("/", function(req,res){
//   //Instance of the Model to be saved to the database
//   var employee = new Employees();
//   employee.name = req.body.name;
//   employee.position = req.body.position;
//   employee.salary = req.body.salary;
//   employee.status = true;
//   employee.save(function(err, savedEmployee){
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }
//
//     res.send(savedEmployee);
//   });
// });

module.exports = router;
