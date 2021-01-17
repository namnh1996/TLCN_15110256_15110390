const db = require('../../db');
const saleProducts = require('../../models/saleproduct.model');

module.exports.saleproducts = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/saleproducts',{
        saleproducts: db.get('saleproducts').value().slice(start,end)
    })
    // const saleproducts = await saleProducts.find();{
    //     res.render('products/saleproducts',{
    //         saleproducts: saleproducts
    //     });
    // };
}