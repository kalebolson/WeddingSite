var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ImgUrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    timeStamp: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [String]
})

module.exports = ImgUrl = mongoose.model('ImgUrl', ImgUrlSchema)