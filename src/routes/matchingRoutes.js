const express = require('express')
const router = express.Router()
const controller = require('../controllers/matchingController')

router.use(express.json());

//Post matching
router.post('/matchings', controller.createNewMatching)
//Get by ID 
router.get('/matchings/:id', controller.getMatchingById)
//Get all matchings
router.get('/matchings', controller.getAllMatching)
//Update by ID
router.patch('/matchings/:id', controller.updateMatchingById)
//Delete by ID
router.delete('/matchings/:id', controller.deleteMatchingById)
//Delete all matchings
router.delete('/matchings', controller.deleteAllMatching)

module.exports = router;