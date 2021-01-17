const db = require('../../db');
const giaybongdaAdidas = require('../../models/giaybongdaadidas.model');
module.exports.giaybongdaadidas = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giaybongdaadidas',{
        giaybongdaadidas: db.get('giaybongdaadidas').value().slice(start,end)
    })
    // const giaybongdaadidas = await giaybongdaAdidas.find();{
    //     res.render('products/giaybongdaadidas',{
    //         giaybongdaadidas: giaybongdaadidas
    //     });
    // };
}