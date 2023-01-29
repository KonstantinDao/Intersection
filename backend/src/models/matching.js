const mongoose = require('mongoose')
const { Schema } = mongoose;

const matchingSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    partners: [{
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]
    // TODO chat history

})

// Compile a model from the schema
 const Matching = mongoose.model( 'Matching',  matchingSchema);
 module.exports = Matching;