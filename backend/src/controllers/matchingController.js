const matching = require('../models/matching');
const user = require('../models/user');
const matchingService = require('../services/matchingService')

// add matchingId to matchingHistory of user
const addIdToMatchingHistory = async function(pUserId, pMatchingId){
    const currentUser = await user.findById(pUserId)
    const arr = currentUser.matchingHistory.push(pMatchingId)
    currentUser.save()
};

//Post matching
const createNewMatching = async (req, res) => {
    const matchingData = new matching({
        name: req.body.name,
        partners: req.body.partners
    })

    try {
        const newMatching = await matchingService.createNewMatching(matchingData);
        res.status(200).json(newMatching)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Get by ID 
const getMatchingById = async (req, res) => {
    try{
        const currentMatching = await matchingService.getMatchingById(req.params.id)
        res.json(currentMatching)
   } catch (error) {
       res.status(500).json({message: error.message})
   }
}

//Get all matchings
const getAllMatching = async (req, res) => {
    try{
         const matchingList = await matchingService.getAllMatching();
         res.json(matchingList)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Update by ID
const updateMatchingById = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;

        const updatedMatching = await matchingService.updateMatchingById(id, updatedData);
        res.json(updatedMatching)
   } catch (error) {
       res.status(400).json({message: error.message})
   }
}

//Delete by ID
const deleteMatchingById = async (req, res) => {
    try{
        const deletedMatching = await matchingService.deleteMatchingById(req.params.id)
        
        res.send(`Matching ${deletedMatching.name} with id ${deletedMatching.id} has been deleted`)
   } catch (error) {
       res.status(400).json({message: error.message})
   }
}

//Delete all matchings
const deleteAllMatching = async (req, res) => {
    try{ 
        matchingService.deleteAllMatching()
        res.json({message: "success"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createNewMatching,
    getMatchingById,
    getAllMatching,
    updateMatchingById,
    deleteMatchingById,
    deleteAllMatching
}