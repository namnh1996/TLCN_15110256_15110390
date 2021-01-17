const db = require('../db');

module.exports.addToCart = (req,res,next) => {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    let count = db.get('sessions').find({id: sessionId}).get('cart.' + productId, 0).value();
    db.get('sessions').find({id: sessionId}).set('cart.' + productId, count + 1).write();
    res.redirect('/products');
}

module.exports.checkout = (req,res,next) => {
    //const productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    let cartProducts = db.get('sessions').find({id: sessionId}).value().cart;
    //console.log(cartProducts);
    let qty = 0;
    let totalPrice = 0;
    let  matchedProducts = [];
    for(item in cartProducts){
        qty = qty + cartProducts[item];
        for(let i = 0; i < cartProducts[item]; i++){
            matchedProducts.push(db.get('products').value().filter((product) => {
                //console.log("work!");
                return product.id.indexOf(item) !== -1
            }))
        }    
    }
    //console.log(qty);
    var object =  [];
    for(let i = 0; i < matchedProducts.length; i++){
        for(let j = 0; j < matchedProducts[i].length; j++){
            object.push(matchedProducts[i][j]);
        }
    }
    
    //console.log(object);
    for(let i = 0; i < object.length; i++){
        //console.log(object[i].price);
        totalPrice = totalPrice + object[i].price;
    }
    totalPrice = totalPrice.toFixed("1").replace(/\d(?=(\d{3})+\.)/g, '$&,');
    res.render('carts/index',{
        products: object,
        qty:qty,
        totalPrice: totalPrice
    });
}
module.exports.removeFromCart = (req,res,next) => {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    let count = db.get('sessions').find({id: sessionId}).get('cart.' + productId).value();
    db.get('sessions').find({id: sessionId}).set('cart.' + productId, count - 1).write();

    var sessionId = req.signedCookies.sessionId;
    let cartProducts = db.get('sessions').find({id: sessionId}).value().cart;
    //console.log(cartProducts);
    res.redirect('/cart/checkout');
    
}