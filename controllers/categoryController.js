const category = require('../models/category.model');

exports.getAll = async (req,res)=> {
    try {
        const eachCategory = await category.find();
        console.log(eachCategory);
        res.json(await category.find()) 
    } catch(err) {
        res.status(500).json(err);
    }
}

exports.postOne = async(req,res)=> {
    try{
        const {
            name
        } = req.body;
        const newCategory = new category({
            name
        });
        await newCategory.save()
        res.json({message: 'ok'})

    } catch(err){
        res.status(500).json(err);
    }
}