const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { m3, voc_cert, tools } = require("../configs/data/projects.js");

router.get('/projects', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "PROJECTS",
        path: "/projects",
        platform: req.useragent,
        error: null,
        data: {
            m3: m3,
            voc_cert: voc_cert,
            tools: tools,
        },
    });
});


module.exports = router;