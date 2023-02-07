const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");

router.get('/activity', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "ACTIVITY",
        path: "/activity",
        platform: req.useragent,
        error: null,
        data: {
            
        },
    });
});


module.exports = router;