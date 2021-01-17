var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const linhkienthethao = mongo.model('linhkienthethao', userSchema, 'linhkienthethao');
module.exports = linhkienthethao;