const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } ,
    isAvailable: { type: Boolean, default: false }
});

const captain = mongoose.model('captain', userSchema);
module.exports = captain;
 