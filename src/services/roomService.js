const room = require('../models/room');
const user = require('../models/user');
const userService = require('../services/userService')


const createNewRoom = async (pRoom) => {
    const newRoom = await pRoom.save();
    return newRoom;
};

const getRoomById = async (pId) => {
    const currentRoom = await room.findById(pId).populate({
        path: "participants",
        model: "User"
    });
    return currentRoom;
}

const updateRoomById = async (pId, pUpdatedData) => {
    const id = pId;
    const updatedData = pUpdatedData;
    const options = { new: true };

    const updatedRoom = await room.findByIdAndUpdate(id, updatedData, options).populate({
        path: "participants",
        model: "User"
    });
    return updatedRoom;
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
    await room.deleteMany();
}

function bestMatchForUser(collection,user) {
    return collection.sort(function(a,b){
      var c=0,d=0,p;
      for (p in user) {
        if (user.hasOwnProperty(p)) {
          c+=Number((a[p]||0)&&a[p]===user[p]);
          d+=Number((b[p]||0)&&b[p]===user[p]);
        }  
      }
      return (d<c)?-1:1;return 0;
    })[0];
  }

const calculateMatchings = async (pId) => {
    const currentRoom = await getRoomById(pId);
    const userList = currentRoom.participants;
    const userWithInterests = new Map();

    // matching algorithm
    for(const user of userList){
        userWithInterests.set(user.id, user.interests)

        if(userWithInterests.get(user.id).includes('sport')){
            console.log(1)
        }else{
            console.log(0)
        }
    }

   
    console.log(userWithInterests)
}

module.exports = {
    createNewRoom,
    getRoomById,
    updateRoomById,
    deleteRoomById,
    deleteAllRooms,
    calculateMatchings
}


