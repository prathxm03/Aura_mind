const  express = require('express')
const { RideAuthMiddleware , captainAuthMiddleware } = require('../middleware/authMiddleware')
const { createRide ,acceptRide} = require('../controllers/ride.controllers')
const router = express()

router.post('/create-ride' ,RideAuthMiddleware ,createRide)
router.put('/accept-ride' , captainAuthMiddleware  ,acceptRide )


module.exports = router
 