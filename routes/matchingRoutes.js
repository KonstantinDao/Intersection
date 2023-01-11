const express = require('express');
const router = express.Router()
const Matching = require('../models/matching');
const User = require('../models/user');

router.use(express.json());

module.exports = router;

// add 
const updateDependencies = async function(pUserId, pMatchingId){
    console.log(pMatchingId)
    const currentUser = await User.findById(pUserId)
    const arr = currentUser.matchingHistory.push(pMatchingId)
    currentUser.save()
};

//Post matching
router.post('/matching', async (req, res) => {
    const matching = new Matching({
        name: req.body.name,
        partners: req.body.partners
    })

    try {
        const data = await matching.save();
        const userListOfMatching = data.partners
        
        userListOfMatching.forEach(userObjectId => updateDependencies(userObjectId.toHexString(), matching.id));
        
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all matchings
router.get('/matchings', async (req, res) => {
    try{
         const matching = await Matching.find()
         console.log(matching)
         res.json(matching)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID 
router.get('/matching/:id', async (req, res) => {
    try{
        const matching = await Matching.findById(req.params.id)
        res.json(matching)
   } 
   catch (error) {
       res.status(500).json({message: error.message})
   }
})

//Update by ID
router.patch('/matching/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const matching = await Matching.findByIdAndUpdate(id, updatedData, options)
        res.json(matching)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
})

//Delete by ID
router.delete('/matching/:id', async (req, res) => {
    try{
        const matching = await Matching.findByIdAndDelete(req.params.id)
        res.send(`Matching with id ${matching.id} has been deleted`)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
})

//Delete all matchings
router.delete('/matchings', async (req, res) => {
    try{
        const matching = await Matching.deleteMany()
        res.json({message: "success"})
    } 
    catch (error){
        res.status(500).json({message: error.message})
    }
    
})