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

//Post matching
const createNewMatching = async (matchingData) => {
    const newMatching = await matchingData.save();
    const userListOfMatching = newMatching.partners
    userListOfMatching.forEach(userObjectId => addIdToMatchingHistory(userObjectId.toHexString(), newMatching.id));

    return newMatching;
}

//Get by ID 
const getMatchingById = async (matchingId) => {
    return await matching.findById(matchingId);
}

//Get all matchings
const getAllMatching = async (req, res) => {
    return await matching.find()
}

//Update by ID
const updateMatchingById = async (id, updatedData) => {
    const options = { new: true };
    return await matching.findByIdAndUpdate(id, updatedData, options);
}

//Delete by ID
const deleteMatchingById = async (pId) => {
    const deletedMatching = await matching.findByIdAndDelete(pId)
    const matchingList = deletedMatching.partners
    matchingList.forEach(userObjectId => removeIdFromMatchingHistory(userObjectId.toHexString(), pId))

    return deletedMatching
}

//Delete all matchings
const deleteAllMatching = async (req, res) => {
    const matchingList = await matching.deleteMany()
}

module.exports = {
    createNewMatching,
    getMatchingById,
    getAllMatching,
    updateMatchingById,
    deleteMatchingById,
    deleteAllMatching
}