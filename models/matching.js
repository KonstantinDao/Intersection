const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./user');

const MatchingSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    partners: [{
        required: true,
        type: mongoose.ObjectId,
        ref: 'User'
    }]

})

module.exports = mongoose.model( 'Matching',  MatchingSchema);