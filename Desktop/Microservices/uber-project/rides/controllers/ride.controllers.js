const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const rideModel = require('../models/ride.model')
const { publishToQueue,subscribeToQueue }  = require('../services/rabit');
dotenv.config();

const createRide = async (req, res) => {
    const { pickup, destination } = req.body;

    const createRide = new rideModel({
        user: req.user._id,
        pickup,
        destination,
        fare: Math.floor(Math.random() * 100) + 20 // Random fare between 20 and 120
    });

    await createRide.save();
    publishToQueue("new-ride" , JSON.stringify(createRide) );
    res.send(createRide);

}

const acceptRide = async (req, res) => {
    const { rideId } = req.query;
    const ride = await rideModel.findById(rideId);
    if (!ride) {
        return res.status(404).json({ error: 'Ride not found.' });
    }

    ride.status = 'accepted';
    await ride.save();
     publishToQueue("ride-accepted" , JSON.stringify(ride) );
    res.json(ride);
} 


// subscribeToQueue("new-ride", (message) => {
//     console.log("Received ride request:", JSON.parse(message) );
//     // Here you can add logic to notify drivers, etc.
// });


module.exports = { createRide ,acceptRide};



