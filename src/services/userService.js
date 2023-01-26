const user = require('../models/user');

const createNewUser = async (userData) => {
    return await userData.save();
}

const getUserById = async (pId) => {
    return await user.findById(pId);

}

const getUserByName = async (pName) => {
    return await user.findOne({name: pName})
}

const getAllUser = async () => {
    return await user.find()

}

const updateUserById = async (id, updatedData) => {
    const options = { new: true };
    return await user.findByIdAndUpdate(id, updatedData, options);
}

const deleteUserById = async (userId) => {
    return await user.findByIdAndDelete(userId);
}

const deleteAllUser = async () => {
    return await user.deleteMany();
}
module.exports = {
    createNewUser,
    getUserById,
    getUserByName,
    getAllUser,
    updateUserById,
    deleteUserById,
    deleteAllUser
}