const db = require('../db');
const shortId = require('shortid');

module.exports.index = (req,res) => {
    res.render('users/index',{
    users: db.get('users').value()
})}

module.exports.search = (req,res) => {
    var q = req.query.q;
    //console.log(req.query);
    var matchedUsers = db.get('users').value().filter((user) => {
        //console.log("work!");
        return user.name.toLowerCase().indexOf(q.toLocaleLowerCase()) !== -1
    })
    res.render('users/index',{
        users: matchedUsers
    })
}

module.exports.create = (req,res) => {
    //console.log(req.cookies);
    res.render('users/create')
}

module.exports.get = (req,res) => {
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('users/view',{
        user: user
    });
}

module.exports.PostCreate = (req,res) => {
    req.body.id = shortId.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    //console.log(res.locals);
    db.get('users').push(req.body).write();
    res.redirect('/users');
}
