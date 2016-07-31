var fs = require('fs');
var csv = require('csv');
var async = require('async');
var _ = require('lodash');
var database = 'dev.mmb';
var Sequelize = require("sequelize");

var sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: database
});

var accountslist = sequelize.import('./models/ACCOUNTLIST_V1');
var assets = sequelize.import('./models/ASSETS_V1');
var checkingaccountModel = sequelize.import('./models/CHECKINGACCOUNT_V1');
var payeesModel = sequelize.import('./models/PAYEE_V1');

var parser = csv.parse({
    columns: true,
    relax: true,
    delimiter: ';'
});

var inserter = async.queue(function (task, inserterCallback) {
    payeesModel.findOrCreate({
        where: {
            PAYEENAME: task.Kontonummer
        }
    }).spread(function (payee, created) {
        var payee = payee.get({
            plain: true
        });
        console.log(task);
        var amount = parseFloat(task.Betrag.replace(',', '.'));
        var transcode = 'Withdrawal';
        var categid = 15;
        if (amount > 0) {
            categid = 14;
            transcode = 'Deposit';
        }
        amount = Math.abs(amount);
        var date = '20' + task.Valutadatum.split('.').reverse().join('-');
        return checkingaccountModel.findOrCreate({
            where: {
                ACCOUNTID: 1,
                TOACCOUNTID: -1,
                PAYEEID: payee.PAYEEID,
                TRANSCODE: transcode,
                TRANSAMOUNT: amount,
                STATUS: '',
                TRANSACTIONNUMBER: '',
                NOTES: '',
                CATEGID: categid,
                SUBCATEGID: -1,
                TRANSDATE: date,
                FOLLOWUPID: -1,
                TOTRANSAMOUNT: 0
            }
        });
    }).then(function () {
        inserterCallback();
    });
});

parser.on('readable', function () {
    while (line = parser.read()) {
        inserter.push(line);
    }
});
parser.on('end', function (count) {
    inserter.drain = function () {
        process.exit();
    }
});

fs.createReadStream('dev.csv').pipe(parser);