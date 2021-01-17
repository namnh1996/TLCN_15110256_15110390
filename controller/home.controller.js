module.exports.get = async (req,res,next) => {
    const user = db.get('users').find({
        id: req.signedCookies.userID
    }).value();
    let qty = 0;
    var sessionId =  await req.signedCookies.sessionId;
    let cartProducts = await db.get('sessions').find({id: sessionId}).value();
    //console.log(cartProducts);
    if(cartProducts){ 
        var newCartProducts = cartProducts.cart;
        //console.log(newCartProducts);
        for(item in newCartProducts){
            qty = qty + newCartProducts[item];   
        }
    }
    res.render('index',{
        user: user,
        qty: qty
    });
}