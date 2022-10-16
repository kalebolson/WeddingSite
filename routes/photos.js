var router = require('express').Router()
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const ImgUrl = require('../models/ImgUrl')

router.post('/', async (req, res) => {
    if (!req.files.photo){
        res.status(400).send('Nothing found in request files.photo')
    }

    const fileName = req.files.photo.name;
    const fileContent = req.files.photo.data;
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'images/' + fileName,
        Body: fileContent
    }

    await s3.upload(params, async (err, data) => {
        if (err){
            console.log(err)
            res.statusCode(500).send(err)
        }
        try{
            const imgUrl = new ImgUrl({
                url: data.Location,
                timeStamp: new Date()
            });

            const doc = await imgUrl.save();

            res.send({status: true, content: imgUrl})
        }
        catch (err) {
            res.send({status: false, message: err})
        }
    });
    
});

router.get('/', async (req, res) => {
    try {
        const images = await ImgUrl.find();
        res.send({images});
    }
    catch (e){
        res.status(500).send({ message: e });
    }
});

router.post('/like', async (req, res) => {
    try {
        const image = await ImgUrl.findById(req.body.id)

        image.likes++
        await image.save()

        res.send({ status: true })
    }
    catch (e) {
        res.status(500).send({ message: e })
    }
})

router.delete('/like', async (req, res) => {
    try {
        const image = await ImgUrl.findById(req.body.id)

        if (image.likes > 0) {
            image.likes--

            await image.save()
        }

        res.send({ status: true })
    }
    catch (e) {
        res.status(500).send({ message: e })
    }
})

module.exports = router;