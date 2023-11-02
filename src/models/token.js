"use strict"

const { mongoose } = require('mongoose')


const TokenSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accounts',
        required: true,
        index: true,
    }, 

    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
    }, 

}, { collection: 'tokens', timestamps: true })

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
TokenSchema.pre('init', function(data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)