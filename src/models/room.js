const mongoose = require('mongoose')
const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    room_nr: {
        required: true,
        type: String
    },
    participants: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],
    numberOfParticipants: {
        type: Number
    },
    matches: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Matching'
    }]

})

// Compile a model from the schema
 const Room = mongoose.model( 'Room',  RoomSchema);
 module.exports = Room;