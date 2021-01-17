var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const giaybongdamizuno = mongo.model('giaybongdamizuno', userSchema, 'giaybongdamizuno');
module.exports = giaybongdamizuno;