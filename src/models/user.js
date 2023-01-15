const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    matchingHistory: [{
        type: mongoose.ObjectId,
        ref: 'Matching'
    }]

})

module.exports = mongoose.model( 'User', UserSchema);