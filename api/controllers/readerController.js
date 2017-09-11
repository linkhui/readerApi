'use strict';

// var url = require("url");

exports.listall = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    // var city = req.query['city'];
    // console.log("Request for "  + " " + city + " received.");

    readDB();

    res.json({
    "success": true,
        "errorMsg": "成功",
        "errorCode": "200",
        "fields": {
        "城市": city,
            "最低温度": "30℃",
            "最高温度": "42℃",
            "天气": "多云"
    }
});
    
}

function readDB() {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Mysql_781101',
        database : 'reader'
    });

    connection.connect();

    connection.query('SELECT * from audio', function(err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });

    connection.end();
}

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};