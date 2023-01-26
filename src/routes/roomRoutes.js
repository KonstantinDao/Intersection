const express = require('express')
const router = express.Router()
const controller = require('../controllers/roomController')

router.use(express.json());

//Post new room
router.post('/rooms', controller.createNewRoom)
//Get by ID 
router.get('/rooms/:id', controller.getRoomById)
router.get('/roomByNumber/:room_nr', controller.getRoomByNumber)
router.get('/rooms/:userId', controller.getAllRoomsByUserId)
//Update by ID
router.patch('/rooms/:id', controller.updateRoomById)
//Delete by ID
router.delete('/rooms/:id', controller.deleteRoomById)
//for admin
router.delete('/rooms', controller.deleteAllRooms)
router.get('/rooms/matching/:id', controller.calculateMatchings)

module.exports = router;