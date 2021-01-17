const db = require('../../db');
const linhKienTheThao = require('../../models/giaybongdatreem.model');
module.exports.linhkienthethao = async (req,res) => {
    // let page = parseInt(req.query.page) || 1; //n
    // let perPage = 6;
    // let start = (page - 1) * perPage;
    // let end = page * perPage
    res.render('products/linhkienthethao',{
        linhkienthethao: db.get('phukienthethao').value()
    })
    // const linhkienthethao = await linhKienTheThao.find();{
    //     res.render('products/linhkienthethao',{
    //         linhkienthethao: linhkienthethao
    //     });
    // };
}