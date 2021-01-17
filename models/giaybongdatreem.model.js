var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 
const giaybongdatreem = mongo.model('giaybongdaTreEm', userSchema, 'giaybongdaTreEm');
module.exports = giaybongdatreem;