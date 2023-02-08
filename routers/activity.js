const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { activity } = require("../configs/data/activity.js");

router.get('/activity', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "ACTIVITY",
        path: "/activity",
        platform: req.useragent,
        error: null,
        data: {
            activity: activity,
        },
    });
});


module.exports = router;