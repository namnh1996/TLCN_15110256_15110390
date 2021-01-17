var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const saleproducts = mongo.model('saleproducts', userSchema, 'saleproducts');
module.exports = saleproducts;