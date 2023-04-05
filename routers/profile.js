const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { myself, mom, dad, school } = require("../configs/data/personal_info.js");


router.get('/profile', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "PROFILE",
        path: "/profile",
        platform: req.useragent,
        error: null,
        data: {
            birthDate: config.birthDate,
            myself: myself,
            mom: mom,
            dad: dad,
            school: school,
        },
    });
});


module.exports = router;