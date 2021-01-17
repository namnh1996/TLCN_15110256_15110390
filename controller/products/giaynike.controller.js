const db = require('../../db');
module.exports.giaynike = async (req,res) => {
    let page = parseInt(req.query.page) || 1; //n
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage
    res.render('products/giaynike',{
        giaynike: db.get('giaybongdanike').value().slice(start,end)
    })
}