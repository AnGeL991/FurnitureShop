const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({

    product:{type:Array,required:true},

})

module.exports = mongoose.model('basket',basketSchema)