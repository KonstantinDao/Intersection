const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.use(express.json());

module.exports = router;

//Post user
router.post('/user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        matchingHistory: req.body.matchingHistory
    })

    try {
        const data = await user.save();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all user
router.get('/users', async (req, res) => {
    try{
         const users = await User.find()
         res.json(users)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID 
router.get('/user/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
   } 
   catch (error) {
       res.status(500).json({message: error.message})
   }
})

//Update by ID
router.patch('/user/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const user = await User.findByIdAndUpdate(id, updatedData, options)
        res.json(user)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
})

//Delete by ID
router.delete('/user/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.send(`User with id ${user.id} and ${user.name} has been deleted`)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
})

//Delete all users
router.delete('/users', async (req, res) => {
    try{
        const user = await User.deleteMany()
        res.json({message: "success"})
    } 
    catch (error){
        res.status(500).json({message: error.message})
    }
    
})