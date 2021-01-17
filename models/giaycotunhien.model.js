var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const giaycotunhien = mongo.model('giaycotunhien', userSchema, 'giaycotunhien');
module.exports = giaycotunhien;