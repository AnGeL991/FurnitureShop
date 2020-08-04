const Products = require('../models/product.model');

exports.getAll = async(req,res)=> {
    try{
        const Product = await Products.find();
        console.log(Product);
        res.json(await Products.find());
    } catch(err) {
        res.status(500).json(err);
    }
}


exports.postOne = async(req,res)=> {
    try{
        const{
            title,category,price,image,
        } = req.body;
        const newProduct = new Products({
            title,category,price,image,
        });
        await newProduct.save();
        res.json({
            message:'ok'
        });

    } catch(err){
        res.status(500).json(err)
    }
}