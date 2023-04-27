const express = require('express')
const {authGuard} = require ("../middleware/verification.js")
const infoRouter = require ('./../controllers/info/infoHandler')
const userRouter = require ('./../controllers/user/userHandler')
const userCharRouter = require ('./../controllers/character/characterHandler')
const questRouter = require ('./../controllers/quest/questHandler')
const mobRouter = require ('../controllers/mob/mobHandler.js')
const dmJournalRouter = require ('../controllers/dmJournal/dmJournalHandler')
const imageRouter = require('../controllers/images/imageHandler')

const router = express.Router()

router.use('/info', infoRouter)
router.use('/user', userRouter)
router.use(authGuard)
router.use('/user/character', userCharRouter)
router.use('/quest', questRouter)
router.use('/mob', mobRouter)
router.use('/dm/journal', dmJournalRouter)
router.use('/images', imageRouter)

module.exports = router