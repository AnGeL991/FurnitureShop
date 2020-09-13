const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    amount:{type:Number,default:1},
    description:{type:String},
    category:{type:String},
});

module.exports = mongoose.model("product", productSchema);
