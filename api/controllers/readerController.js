'use strict';

// var url = require("url");

exports.listall = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    // var city = req.query['city'];
    // console.log("Request for "  + " " + city + " received.");

    var reader = require('../models/readerModel');

    reader.readDB(res);

}



exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};