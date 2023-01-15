const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    participants: [{
        type: mongoose.ObjectId,
        ref: 'User'
    }],
    numberOfParticipants: {
        type: Number
    }

})

module.exports = mongoose.model( 'Room',  RoomSchema);