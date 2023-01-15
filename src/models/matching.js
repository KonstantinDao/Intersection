const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
    // TODO chat history

})

module.exports = mongoose.model( 'Matching',  MatchingSchema);