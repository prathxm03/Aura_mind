const express = require('express')
const mongoose = require('mongoose');
const app = express()
const rideRoutes = require('./routes/ride.routes')
const cookieParser = require('cookie-parser');
const connectRabbit = require('./services/rabit')
connectRabbit.connectRabbitMQ();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


async function connectToDatabase() {
   try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ride-service');
        console.log('Connected to MongoDB ride-service');
   } catch (error) {
    console.error('Error connecting to MongoDB:', error);
   }
}

connectToDatabase();

app.use('/' , rideRoutes);
 
module.exports = app;