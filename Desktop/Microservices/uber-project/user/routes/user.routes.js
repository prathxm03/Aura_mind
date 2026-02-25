const  express = require('express')
const { login , register, profile ,acceptedRide } = require('../controllers/user.controllers')
const UserAuthMiddleware = require('../middleware/authMiddleware')
const router = express()

router.post('/register' ,register)
router.post('/login' ,login)
router.get('/profile' , UserAuthMiddleware , profile)
router.get('/accept-ride' , UserAuthMiddleware , acceptedRide)


module.exports = router
 