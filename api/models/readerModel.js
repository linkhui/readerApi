'use strict';

exports.readDB = function (res) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Mysql_781101',
        database : 'reader'
    });

    connection.connect();

    connection.query('SELECT * from audio', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.json(rows);
        }
        else {
            console.log('Error while performing Query.');
            res.json({
                "success": false,
                "errorMsg": "Error while performing Query.",
                "errorCode": "400",
                "fields": {}
            });
        }
    });

    connection.end();
};