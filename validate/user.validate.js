module.exports.postCreate = (req, res, next) => {
    var errors = [];
    if(!req.body.name){
        errors.push("Name is requited");
    }
    if(!req.body.phone){
        errors.push("Phone is requited");
    }
    if(!req.body.email){
        errors.push("Email is requited");
    }
    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    //res.locals.success = true;
    next();

}