const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    interests: [{
        type: String
    }],
    matchingHistory: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Matching'
    }]
})

// Compile a model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
