const express = require('express')
const router = express.Router()
const controller = require('../controllers/userConroller')

router.use(express.json());

//Post user
router.route('/users').post(controller.createNewUser)
//Get by ID 
router.route('/users/:id').get(controller.getUserById)
//Get all user
router.route('/users').get(controller.getAllUser)
//Update by ID
router.route('/users/:id').patch(controller.updateUserById)
//Delete by ID
router.route('/users/:id').delete(controller.deleteUserById)
//Delete all users
router.route('/users').delete(controller.deleteAllUser)

module.exports = router;