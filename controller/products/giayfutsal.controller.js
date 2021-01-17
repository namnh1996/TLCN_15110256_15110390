const db = require('../../db');
//const giayFutsal = require('../../models/giayconhantao.model');
module.exports.giayfutsal = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giayfutsal',{
        giayfutsal: db.get('giayfutsal').value().slice(start,end)
    })
    // const giayfutsal = await giayFutsal.find();{
    //     res.render('products/giayfutsal',{
    //         giayfutsal: giayfutsal
    //     });
    // };
}