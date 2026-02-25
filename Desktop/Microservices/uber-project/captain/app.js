const express = require('express')
const mongoose = require('mongoose');
const app = express()
const captainRoutes = require('./routes/captain.routes')
const cookieParser = require('cookie-parser');
const RabbitMQ = require('./services/rabit');
RabbitMQ.connectRabbitMQ();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

async function connectToDatabase() {
   try {
        await mongoose.connect('mongodb://127.0.0.1:27017/captain-service');
        console.log('Connected to MongoDB');
   } catch (error) {
    console.error('Error connecting to MongoDB:', error);
   }
}

connectToDatabase();

app.use('/' , captainRoutes);
 
module.exports = app;