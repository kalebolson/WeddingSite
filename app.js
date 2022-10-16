var express = require('express')
var connectDB = require('./config/db')
var cors = require('cors')
var rsvpRoute = require('./routes/rsvp')
var photosRoute = require('./routes/photos')
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
var path = require('path')

require('dotenv').config({ path: './config/config.env' })


connectDB()
var app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload({
    createParentPath: true
}))

app.use('/api/rsvp', rsvpRoute)
app.use('/api/photos', photosRoute)

const port = process.env.PORT

console.log('Environment:', process.env.ENV);

if (process.env.ENV === 'PROD'){
    app.use(express.static(path.join(__dirname, 'wedding-site', 'build')));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, 'wedding-site', 'build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server started on port ${port}`))