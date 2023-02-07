const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");

router.get('/profile', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "PROFILE",
        path: "/profile",
        platform: req.useragent,
        error: null,
        data: {
            birthDate: config.birthDate,
        },
    });
});


module.exports = router;