var fs = require('fs');
var parse = require('csv-parse');
var database = 'dev.mmb';
var Sequelize = require("sequelize");

var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: database
});

var accountslist = sequelize.import('./models/ACCOUNTLIST_V1');
var assets = sequelize.import('./models/ASSETS_V1');
var checkingaccount = sequelize.import('./models/CHECKINGACCOUNT_V1');
var payeesModel = sequelize.import('./models/PAYEE_V1');

var payeeExists = function (payeeAccountnumber) {
    return payeesModel.findOrCreate({
        where: {
            PAYEENAME: payeeAccountnumber
        }
    }).then(function (payee, created) {
        if (created) {
            console.log('Created');
        } else {
            console.log('Allready exists');
        }
    });
}


var parser = parse({ delimiter: ';' }, function(err, data){
  //console.log(data);
  for (var index = 1; index < data.length; index++) {
      var element = data[index];
      var payeeAccountnumber = element[6]; 
      if (payeeAccountnumber === '') {
          console.log(element);
      }
      payeeExists(payeeAccountnumber);
  }
});

fs.createReadStream('dev.csv').pipe(parser);