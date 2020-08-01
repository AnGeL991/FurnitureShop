const OrderProduct =require('../models/order.model');

exports.getAll = async(req,res)=> {
    try{
        const OrderProducts = await OrderProduct.find();
        console.log(OrderProducts)
        res.json(await OrderProduct.find())
    } catch (err){
        res.status(500).json(err);
    }
}

exports.postOne = async(req,res)=> {
    try{
        const{
            _id,product
        } = req.body;
        const newOrder = new OrderProduct({
            _id,product
        });
        await newOrder.save();
        res.json({
            message:'ok'
        });
    } catch(err) {
        res.status(500).json(err)
    }
}