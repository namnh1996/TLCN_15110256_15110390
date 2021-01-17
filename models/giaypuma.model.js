var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const giaybongdapuma = mongo.model('giaybongdapuma', userSchema, 'giaybongdapuma');
module.exports = giaybongdapuma;