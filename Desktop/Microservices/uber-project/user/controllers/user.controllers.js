const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const { subscribeToQueue } = require('../services/rabit');
const dotenv = require('dotenv');

const EventEmitter = require('events');
const rideEventEmitter = new EventEmitter();

dotenv.config();

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
} 

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Use findOne instead of find
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.Jwt_Secret,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true, // optional: adds security
            secure: process.env.NODE_ENV === 'production', // use only over HTTPS in prod
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour
        });
   
        res.json({ message: 'Login successful', token ,user});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
    }
};

const profile = async (req, res) => {
    const userId = req.user.userId;
     const user = await User.findById(userId);
    res.json({message:"profile page working", user});
}

const acceptedRide = async (req, res) => {
    rideEventEmitter.once("ride-accepted", (data) => {
    res.send({ message: 'Ride accepted', ride });
    } );

    // set timeout for long polling
    setTimeout(() => {
        res.status(204).send({ error: 'No ride accepted event received' });
    }, 30000);
}

subscribeToQueue("ride-accepted", async(msg) => {
    const data = json.parse(msg);
    rideEventEmitter.emit("ride-accepted", data);
});

module.exports = { register, login, profile,acceptedRide };



