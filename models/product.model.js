var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const Product = mongo.model('Product', userSchema, 'products');
module.exports = Product;