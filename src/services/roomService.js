const room = require('../models/room');
const user = require('../models/user');


const createNewRoom = async (pRoom) => {
    const newRoom = await pRoom.save();
    return newRoom;
};

const getRoomById = async (pId) => {
    const currentRoom = await room.findById(pId);
    return currentRoom;
}

const updateRoomById = async (pId, pUpdatedData) => {
    const id = pId;
    const updatedData = pUpdatedData;
    const options = { new: true };

    const updatedRoom = await room.findByIdAndUpdate(id, updatedData, options);
    return updateRoom;
}

//Delete by ID
const deleteRoomById = async (pId) => {
    try{
        const deletedRoom = await room.findByIdAndDelete(pId);
        return deletedRoom;
   } 
   catch (error) {
    console.log(error)
   }
}

//Delete all matchings
const deleteAllRooms = async () => {
    const roomList = await room.find();
    roomList.forEach(currentRoom => deleteRoomById(currentRoom.id));
}

const calculateMatchings = async () => {
    // matching algorithm
}
module.exports = {
    createNewRoom,
    getRoomById,
    updateRoomById,
    deleteRoomById,
    deleteAllRooms,
    calculateMatchings
}


