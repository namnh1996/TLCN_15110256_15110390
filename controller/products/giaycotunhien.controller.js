const db = require('../../db');
const giayCoTuNhien = require('../../models/giaycotunhien.model');

module.exports.giaycotunhien = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giaycotunhien',{
        giaycotunhien: db.get('giaycotunhien').value().slice(start,end)
    })
    // const giaycotunhien = await giayCoTuNhien.find();{
    //     res.render('products/giaycotunhien',{
    //         giaycotunhien: giaycotunhien
    //     });
    // };
}