const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { voc_cert, voc_cert_2 } = require("../configs/data/activity.js");

router.get('/activity', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "ACTIVITY",
        path: "/activity",
        platform: req.useragent,
        error: null,
        data: {
            voc_cert: voc_cert,
            voc_cert_2: voc_cert_2,
        },
    });
});


module.exports = router;