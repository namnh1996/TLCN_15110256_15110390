const db = require('../db');
const Product = require('../models/product.model');

module.exports.index = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 9;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/index',{
        products: db.get('products').value().slice(start,end)
    })
    // const products = await Product.find();
    // {
    //     res.render('products/index',{
    //         products: products
    //     });
    // }       
}
module.exports.search = (req,res) => {
    var q = req.query.q;
    //console.log(req.query);
    var matchedProducts = db.get('products').value().filter((product) => {
        //console.log("work!");
        return product.name.toLowerCase().indexOf(q.toLocaleLowerCase()) !== -1
    })
    res.render('products/index',{
        products: matchedProducts
    })
}