const md5 = require('md5');

const db = require('../db');

module.exports.login = (req,res) => res.render('auth/login');
module.exports.postLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = db.get('users').find({email : email}).value();
    if(!user){
        res.render('auth/login',{
            errors: [
                'User dose not exist.'
            ],
            values: req.body
        });
        return;   
    }
    const hashPassword = md5(password);
    if(user.password !== hashPassword){
        res.render('auth/login',{
            errors: [
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userID', user.id, {signed:true});
    res.redirect('/users');
}
module.exports.logout = function(req, res) {
    res.cookie('userID', '', {maxAge: 1});
    res.redirect('/');
};