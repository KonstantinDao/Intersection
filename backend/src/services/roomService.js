const room = require('../models/room');
const matching = require('../models/matching');
const user = require('../models/user');
const userService = require('../services/userService')
const matchingService = require('../services/matchingService')


const createNewRoom = async (pRoom) => {
    const newRoom = await pRoom.save();
    return newRoom;
};

const getRoomById = async (pId) => {
    const currentRoom = await room.findById(pId).populate({
        path: "participants",
        model: "User",
        select: {'_id': 1, 'interests': 1},
    });
    return currentRoom;
}

const getRoomByNumber = async (pRoomNr) => {
    return await room.findOne({room_nr: pRoomNr});

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

function bestMatchForUser(collection,userEntry) {
    const sortedArray = collection.sort(function(a,b){
        let interestsA = a.interests;
        let interestsB = b.interests;
        var c=0,d=0,p;
        for (p in userEntry.interests) {
            c+=Number(interestsA.includes(p));
            d+=Number(interestsB.includes(p));
        }
        return (d<c)?-1:1;
    });

    return sortedArray.splice(0,2);
  }

  function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

const calculateMatchings = async (pId) => {
    const currentRoom = await getRoomById(pId);
    let userList = currentRoom.participants;

    // matching algorithm
    for(const user of userList){
        // remaining userList smaller then 4
        if (userList.length <= 4) {
            const matches = [];
            for(const u of userList){
                matches.push(u.id);
            }
            console.log(matches)
            const matchingData = new matching({
                name: currentRoom.name,
                partners: matches
            });
            console.log(await matchingService.createNewMatching(matchingData));
            return;
        }
        userList = arrayRemove(userList, user)
        let result = bestMatchForUser(userList, user);
        result.push(user);

        const matches = [];
        for(const u of result){
            matches.push(u.id);
        }
        console.log(matches)
        
        // save matching
        const matchingData = new matching({
            name: currentRoom.name,
            partners: matches
        });
        console.log(await matchingService.createNewMatching(matchingData));

        
        userList = arrayRemove(userList, result[0])
        userList = arrayRemove(userList, result[1])
    }
}

module.exports = {
    createNewRoom,
    getRoomById,
    getRoomByNumber,
    updateRoomById,
    deleteRoomById,
    deleteAllRooms,
    calculateMatchings
}


