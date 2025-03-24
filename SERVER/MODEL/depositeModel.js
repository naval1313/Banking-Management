const mongoose = require ("mongoose");

const depositeSchema = new mongoose.Schema({
  
   custID:{
    type:String,
   },
   status:{
      type:String,
   },
   Amount:{
     type:Number
   }


},{timestamps:true});

module.exports = mongoose.model("deposite",depositeSchema);
