const mongoose=require('mongoose');

var productSchema = new mongoose.Schema({
    // name:  {type:String, required:true},
    // price: {type:String, required:true},
    // status: {type:String, required:true},
  });

  
module.exports = mongoose.model("Product", productSchema );