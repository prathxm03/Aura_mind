const  express = require('express')
const { login , register ,profile ,toggleAvailable , waitForNewRide} = require('../controllers/captain.controllers')
const CaptainAuthMiddleware = require('../middleware/authMiddleware')
const router = express()

router.post('/register' ,register)
router.post('/login' ,login)
router.get('/profile' ,CaptainAuthMiddleware, profile)
router.patch('/toggle_availabe' ,CaptainAuthMiddleware, toggleAvailable)
router.get('/new-ride' ,CaptainAuthMiddleware, waitForNewRide);


module.exports = router
 