const matching = require('../models/matching');
const user = require('../models/user');

// add matchingId to matchingHistory of user
const addIdToMatchingHistory = async function(pUserId, pMatchingId){
    const currentUser = await user.findById(pUserId)
    const arr = currentUser.matchingHistory.push(pMatchingId)
    currentUser.save()
};

const removeIdFromMatchingHistory = async function(pUserId, pMatchingId){
    const currentUser = await user.findById(pUserId)
    const arr = currentUser.matchingHistory.pull(pMatchingId)
    currentUser.save()
}

//Delete by ID
const deleteMatchingById = async (pId) => {
    try{
        const deletedMatching = await matching.findByIdAndDelete(pId)
        const matchingList = deletedMatching.partners
        matchingList.forEach(userObjectId => removeIdFromMatchingHistory(userObjectId.toHexString(), pId))
    
        return deletedMatching
   } 
   catch (error) {
    console.log(error)
   }
}

//Delete all matchings
const deleteAllMatching = async (req, res) => {
        const matchingList = await matching.find();
        matchingList.forEach(currentMatching => deleteMatchingById(currentMatching._id));
}

module.exports = {
    deleteMatchingById,
    deleteAllMatching
}