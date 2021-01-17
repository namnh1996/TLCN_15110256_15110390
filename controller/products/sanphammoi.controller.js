const db = require('../../db');
const newProducts = require('../../models/newproduct.model');

module.exports.newproducts = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/newproducts',{
        newproducts: db.get('newproducts').value().slice(start,end)
    })
    // const newproducts = await newProducts.find();{
    //     res.render('products/newproducts',{
    //         newproducts: newproducts
    //     });
    // };
}