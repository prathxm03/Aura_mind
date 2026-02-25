const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const RideAuthMiddleware = async(req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.Jwt_Secret);
        const URL = process.env.Base_URL;
        const response = await axios.get(`${URL}/user/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const user = response.data;
        if(!user){
            return res.status(401).json({ error: 'User not found.' });
        }
        req.user =  user // Attach user info to request object
         
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

const captainAuthMiddleware = async (req, res, next) => {
    try {
        const token =
            req.cookies?.token ||
            req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'Access denied. No token provided.' });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.Jwt_Secret);
        console.log('✅ Token verified:', decoded);
        const URL = process.env.BASE_URL;

        // Make request to captain profile endpoint
        const response = await axios.get(`http://localhost:3000/captain/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Use proper response field
        const captain = response.captainData;


        req.captain = captain; // Attach to request object
        next(); // ✅ Continue to next middleware or route

    } catch (error) {
        console.error('❌ Captain Auth Middleware Error:', error.message);

        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = captainAuthMiddleware;

module.exports = { RideAuthMiddleware ,captainAuthMiddleware};