const db = require('../db');
module.exports.requireAuth = (req,res,next) => {
    //console.log(req.cookies.userID);
    if(!req.signedCookies.userID){
        res.redirect('/auth/login');
        return;
    }
    const user = db.get('users').find({
        id: req.signedCookies.userID
    }).value();

    if(!user){
        res.redirect('/auth/login');
        return; 
    }
    res.locals.user = user;
    var sessionId = req.signedCookies.sessionId;
    let cartProducts = db.get('sessions').find({id: sessionId}).value().cart;
    let qty = 0;
    for(item in cartProducts){
        qty = qty + cartProducts[item];   
    }
    res.locals.qty = qty;
    next();
};
module.exports.requireAuthProduct = (req,res,next) => {
    //console.log(req.cookies.userID);
    var sessionId = req.signedCookies.sessionId;
    let cartProducts = db.get('sessions').find({id: sessionId}).value().cart;
    let qty = 0;
    for(item in cartProducts){
        qty = qty + cartProducts[item];   
    }
    const user = db.get('users').find({
        id: req.signedCookies.userID
    }).value();

    res.locals.user = user;
    res.locals.qty = qty;
    next();
};
