var mongoose = require('mongoose')
var Schema = mongoose.Schema

const RSVPSchema = new Schema({
    guestName: {
        type: String,
        required: true
    },
    attending: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

module.exports = Rsvp = mongoose.model('rsvp', RSVPSchema)