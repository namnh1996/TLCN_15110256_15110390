var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
}); 

const User = mongo.model('User', userSchema, 'users');
module.exports = User;