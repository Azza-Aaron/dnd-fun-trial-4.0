const express = require('express')
const router = express.Router()
const {authGuard} = require ("../middleware/verification.js")
const infoRouter = require ('./../controllers/info/infoHandler')
const userRouter = require ('./../controllers/user/userHandler')
const userCharRouter = require ('./../controllers/character/characterHandler')

router.use('/info', infoRouter)
router.use('/user', userRouter)
router.use(authGuard)
router.use('/user/character', userCharRouter)

module.exports = router