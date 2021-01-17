var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 
const giayconhantao = mongo.model('giayconhantao', userSchema, 'giayconhantao');
module.exports = giayconhantao;