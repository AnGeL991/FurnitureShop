const mongoose = require('mongoose');

const connectToDB=()=> {
    mongoose.connect('mongodb://localhost:27017/FurnitureShop',{useUnifiedTopology:true,useNewUrlParser:true})
    const db =mongoose.connection;
    db.once('open',()=> {
        console.log('connected to the database');
    })
    db.on('error',(err)=> console.log('Error'+ err));
}

module.exports = connectToDB;