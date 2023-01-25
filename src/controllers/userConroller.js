// business logic

const user = require('../models/user');
const userService = require('../services/userService')

const createNewUser = async (req, res) => {
    const userData = new user({
        name: req.body.name,
        password: req.body.password,
        interests: req.body.interests,
        matchingHistory: req.body.matchingHistory
    })

    try {
        const newUser = await userService.createNewUser(userData)
        res.status(200).json(true)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getUserById = async (req, res) => {
    try{
        const currentUser = await userService.getUserById(req.params.id)
        res.json(currentUser)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAllUser = async (req, res) => {
    try{
         const userList = await user.find()
         res.json(userList)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateUserById = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;

        const updatedUser = await userService.updateUserById(id, updatedData);
        res.json(updatedUser);
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
}

const deleteUserById = async (req, res) => {
    try{
        const deletedUser = await userService.deleteUserById(req.params.id)
        res.send(`User ${deletedUser.name} with id ${deletedUser.id} has been deleted`)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
}

const deleteAllUser = async (req, res) => {
    try{
        await userService.deleteAllUser();
        res.json({message: "success"})
    } 
    catch (error){
        res.status(500).json({message: error.message})
    }
    
}

module.exports = {
    createNewUser,
    getUserById,
    getAllUser,
    updateUserById,
    deleteUserById,
    deleteAllUser
}