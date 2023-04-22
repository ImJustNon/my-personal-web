const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { activity_slideshow } = require("../configs/data/home.js");

router.get('/home', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "HOME",
        path: "/home",
        platform: req.useragent,
        error: null,
        data: {
            birthDate: config.birthDate,
            activity_slideshow: activity_slideshow,
        },
    });
});


module.exports = router;