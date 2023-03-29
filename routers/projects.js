const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { m3, voc_cert, voc_cert_2, tools } = require("../configs/data/projects.js");

router.get('/projects', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "PROJECTS",
        path: "/projects",
        platform: req.useragent,
        error: null,
        data: {
            m3: m3,
            voc_cert: voc_cert,
            voc_cert_2: voc_cert_2,
            tools: tools,
        },
    });
});


module.exports = router;