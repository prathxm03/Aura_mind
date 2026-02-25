const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const captain = require('../models/captain.model')
const dotenv = require('dotenv');
dotenv.config();

const { subscribeToQueue } = require('../services/rabit');

var pendingRequests = [];

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new captain({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'captain registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering captain' });
    }
} 

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Use findOne instead of find
        const captainData = await captain.findOne({ email });

        if (!captainData) {
            return res.status(404).json({ error: 'captain not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, captainData.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: captainData._id },
            process.env.Jwt_Secret,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true, // optional: adds security
            secure: process.env.NODE_ENV === 'production', // use only over HTTPS in prod
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour
        });
   
        res.json({ message: 'Login successful', token ,captainData});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
    }
};

const profile = async (req, res) => {
     const userId = req.user.userId;
     const capatinData = await captain.findById(userId);
    res.json({message:"captain profile page working", capatinData});
}

const toggleAvailable = async (req, res) => { 
  try {
        const captainId = req.user.userId;
        const Captain = await captain.findById(captainId);
        if (!Captain) {
            return res.status(404).json({ error: 'Captain not found' });
        }
        
        // Toggle the isAvailable status
        Captain.isAvailable = !Captain.isAvailable;
        await Captain.save();

        res.json({
            message: 'Availability status updated',
            captain: Captain
        });

    } catch (error) {
        console.error('Error toggling availability:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

const waitForNewRide = async (req, res) => {
    req.setTimeout(30000, () => {
        res.status(204).end(); // No Content
    });

    // Store the response object to send data later
    pendingRequests.push(res);
};

subscribeToQueue("new-ride", (data) => {
    const rideData = JSON.parse(data);
     console.log(rideData)
    pendingRequests.forEach((res) => {
        res.json({data:rideData} );
    });

    // Clear the pending requests array
    pendingRequests.length = 0;

});




module.exports = { register, login ,profile , toggleAvailable ,waitForNewRide};



