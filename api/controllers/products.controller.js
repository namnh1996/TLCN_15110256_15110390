//const db = require('../db');
const Product = require('../../models/product.model');
module.exports.index = async (req,res) => {
    const products = await Product.find();{
        res.json(products);
    };
}

module.exports.create = async (req,res) => {
    const products = await Product.create(req.body);
    res.json(products);
};
