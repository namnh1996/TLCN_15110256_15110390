var mongo = require('mongoose'); 
const userSchema = new mongo.Schema({
    name: String,
    image: String,
    description: String
}); 

const giayfutsal = mongo.model('giayfutsal', userSchema, 'giayfutsal');
module.exports = giayfutsal;