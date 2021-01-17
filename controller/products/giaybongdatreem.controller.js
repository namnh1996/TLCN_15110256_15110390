const db = require('../../db');
const giayBongDaTreEm = require('../../models/giaybongdatreem.model');
module.exports.giaybongdatreem = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giaybongdatreem',{
        giaybongdatreem: db.get('giaybongdatreem').value().slice(start,end)
    })
    // const giaybongdatreem = await giayBongDaTreEm.find();{
    //     res.render('products/giaybongdatreem',{
    //         giaybongdatreem: giaybongdatreem
    //     });
    // };
}