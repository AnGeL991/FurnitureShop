const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    product:{type:Array,required:true},

})

module.exports = mongoose.model('basket',basketSchema)