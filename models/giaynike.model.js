var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const giaybongdanike = mongo.model('giaybongdanike', userSchema, 'giaybongdanike');
module.exports = giaybongdanike;