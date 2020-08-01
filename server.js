const express = require('express');
const app = express();
const path =require('path')
const cors = require('cors');
const connectToDB = require('./db');


//import dataBase
connectToDB();

//import routes
const orderProductRoutes = require('./routes/order.routes');

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/api',orderProductRoutes);

app.get('*',(req,res)=> {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
})

app.listen(process.env.PORT || 8000, ()=> {
    console.log("Server is running on port:8000");
});
app.use((req,res)=> {
    res.status(404).send("404 not found");
});