const db = require('../../db');
const giayCoNhanTao = require('../../models/giayconhantao.model');
module.exports.giayconhantao = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giayconhantao',{
        giayconhantao: db.get('giayconhantao').value().slice(start,end)
    })
    // const giayconhantao = await giayCoNhanTao.find();{
    //     res.render('products/giayconhantao',{
    //         giayconhantao: giayconhantao
    //     });
    // };
}