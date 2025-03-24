const mongoose = require ("mongoose");

const customerSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},

accountType:{
    type:String,
    required:true
},
image:{
    type:String,
    
}
})  

module.exports = mongoose.model("customer",customerSchema);
