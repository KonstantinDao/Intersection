// business logic

const user = require('../models/user');

const createNewUser = async (req, res) => {
    const userData = new user({
        name: req.body.name,
        password: req.body.password,
        matchingHistory: req.body.matchingHistory
    })

    try {
        const newUser = await userData.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getUserById = async (req, res) => {
    try{
        const currentUser = await user.findById(req.params.id)
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
        const id = req.params.id
        const updatedData = req.body
        const options = { new: true }

        const updatedUser = await user.findByIdAndUpdate(id, updatedData, options)
        res.json(updatedUser)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
}

const deleteUserById = async (req, res) => {
    try{
        const deletedUser = await user.findByIdAndDelete(req.params.id)
        res.send(`User ${deletedUser.name} with id ${deletedUser.id} has been deleted`)
   } 
   catch (error) {
       res.status(400).json({message: error.message})
   }
}

const deleteAllUser = async (req, res) => {
    try{
        await user.deleteMany()
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