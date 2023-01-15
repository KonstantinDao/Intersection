const room = require('../models/room');
const user = require('../models/user');
const roomService = require('../services/roomService')


//Post room
const createNewRoom = async (req, res) => {
    const roomDTO = new room({
        name: req.body.name,
        password: req.body.password,
        participants: req.body.participants
    })

    try {
        const newRoom = await roomService.createNewRoom(roomDTO);
        res.status(200).json(newRoom)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Get by ID 
const getRoomById = async (req, res) => {
    try{
        const currentRoom = await roomService.getRoomById(req.params.id);
        res.status(200).json(currentRoom)
   } catch (error) {
       res.status(500).json({message: error.message})
   }
}

const getAllRoomsByUserId = async (req, res) => {
    try {
        const RoomsWithUserAsParticipant = roomService.getAllRoomsByUserId(req.params.userId)
        res.status(200).json(RoomsWithUserAsParticipant);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Update by ID
const updateRoomById = async (req, res) => {
    try{
        const updatedRoom = await roomService.updateRoomById(req.params.id, req.body);
        res.json(updatedMatching)
   } catch (error) {
       res.status(400).json({message: error.message})
   }
}

//Delete by ID
const deleteRoomById = async (req, res) => {
    try{
        const deletedRoom = await roomService.deleteRoomById(req.params.id)
        
        res.send(`Matching ${deletedRoom.name} with id ${deletedRoom.id} has been deleted`)
   } catch (error) {
       res.status(400).json({message: error.message})
   }
}

//Delete all rooms
const deleteAllRooms = async (req, res) => {
    try{ 
        roomService.deleteAllRooms()
        res.json({message: "success"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
}

const calculateMatchings = async (req, res) => {
    try{
        const listOfMatchings = roomService.calculateMatchings();
        res.status(200).json(listOfMatchings)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createNewRoom,
    getRoomById,
    getAllRoomsByUserId,
    updateRoomById,
    deleteRoomById,
    deleteAllRooms,
    calculateMatchings
}