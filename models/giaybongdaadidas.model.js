var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 
const giaybongdaadidas = mongo.model('giaybongdaadidas', userSchema, 'giaybongdaadidas');
module.exports = giaybongdaadidas;