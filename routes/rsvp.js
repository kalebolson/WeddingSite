var router = require('express').Router()

const Rsvp = require('../models/RSVP')


router.post('/', async (req, res) => {
    const newRSVP = new Rsvp({
        guestName: req.body.name,
        attending: req.body.attending,
        notes: req.body.notes
    });
    var resObj;
    
    try {
        var doc = await newRSVP.save();
        resObj = {
            message: `"${doc.guestName}" saved successfully`,
            content: doc
        } 
    }
    catch (err) {
        resObj = {
            message: err
        }
    }
    res.json(resObj);
})



module.exports = router