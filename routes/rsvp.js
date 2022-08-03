var router = require('express').Router()

const Rsvp = require('../models/RSVP')


router.post('/', async (req, res) => {
    var resObj = await Promise.all(req.body.rsvps.map(async (rsvp) => {
        const newRSVP = new Rsvp(rsvp)
        var resItem;

        try {
            var doc = await newRSVP.save();
            resItem = {
                message: `"${doc.guestName}" saved successfully`,
                content: doc
            } 
        }
        catch (err) {
            resItem = {
                message: err
            }
        }
        return resItem;
    }));
    res.json(resObj)
})


module.exports = router