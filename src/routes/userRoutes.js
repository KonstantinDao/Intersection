const express = require('express')
const router = express.Router()
const controller = require('../controllers/userConroller')

router.use(express.json());

//Post user
router.post('/users', controller.createNewUser)
//Get by ID 
router.get('/users/:id', controller.getUserById)
router.get('/usersByName/:name', controller.getUserByName)
//Get all user
router.get('/users', controller.getAllUser)
//Update by ID
router.patch('/users/:id', controller.updateUserById)
//Delete by ID
router.delete('/users/:id', controller.deleteUserById)
//Delete all users
router.delete('/users', controller.deleteAllUser)

module.exports = router;