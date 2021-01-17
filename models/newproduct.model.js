var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const newproducts = mongo.model('newproducts', userSchema, 'newproducts');
module.exports = newproducts;