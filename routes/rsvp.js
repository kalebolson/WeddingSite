var router = require('express').Router()

const Rsvp = require('../models/RSVP');


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
});

router.get('/', async (req, res) => {
    try {
        const name = req.query.name;
        if (!name || name === 'undefined') throw 'Name not entered. Please enter name as it appears on invitation!';

        const requester = await Rsvp.findOne({ "guestName": new RegExp(`^${name}$`, 'i') });
        if (!requester) throw `${name} invitation not found. Please enter name as it appears on invitation!`

        const fullGroup = await Rsvp.find({ groupID: requester.groupID });
    
        res.json(fullGroup);
    }
    catch (e) {
        res.status(500).json(e)
    }

});


router.post('/devguestentry', async (req, res) => {
    try {
        const body = req.body;

        await body.map(async group => {
            await group.guestNames.map( async guestName => {
                const isPlusOne = guestName.toUpperCase().replace(' ', '') === "PLUSONE"
                const name = isPlusOne
                    ? "(Placeholder)"
                    : guestName;

                const newRSVP = new Rsvp({
                    guestName: name,
                    groupID: group.groupID,
                    isPlusOne: isPlusOne
                });
                await newRSVP.save();
            })
        })

        res.send('wahoo');
    }
    catch (e){
        res.status(500).json(e);
    }
});



module.exports = router