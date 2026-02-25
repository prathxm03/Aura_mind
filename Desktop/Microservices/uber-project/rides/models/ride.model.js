const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    captain: { type: mongoose.Schema.Types.ObjectId },
    user: { type: mongoose.Schema.Types.ObjectId },
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    status:{ type: String, enum: ['requested', 'accepted', 'in-progress', 'completed', 'cancelled'], default: 'requested' },
    fare: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }

});

const ride = mongoose.model('ride', userSchema);
module.exports = ride;
