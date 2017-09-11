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


exports.write = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    // var city = req.query['city'];
    // console.log("Request for "  + " " + city + " received.");

    // var addSqlParams = [];
    // var reader = require('../models/readerModel');
    //
    //
    // reader.insertDB(res, addSqlParams);

    const body = req.body.Body
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${body} to Express`)

}

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};