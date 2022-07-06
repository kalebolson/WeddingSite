var express = require('express')
var connectDB = require('./config/db')
var cors = require('cors')
var rsvpRoute = require('./routes/rsvp')
var bodyParser = require('body-parser')

require('dotenv').config({ path: './config/config.env' })


connectDB()
var app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/rsvp', rsvpRoute)


const port = process.env.PORT

if (process.env.DEV){
    // do something in dev?
} else {
    app.use(express.static('./wedding-site/build/'))
}


app.listen(port, () => console.log(`Server started on port ${port}`))