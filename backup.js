var Nightmare = require('nightmare');
var nightmare = new Nightmare();
var fs = require('fs');

nightmare
  .goto('https://workflowy.com/accounts/login/')

  // login
  .type('#id_username', process.env.USERNAME)
  .type('#id_password', process.env.PASSWORD)
  .click('[type=submit]')
  .wait()

  // open export panel
  .click('#exportAllButton')
  .wait('.id_text')
  .click('#id_text')
  .wait(500)

  // scrape content
  .evaluate(function () {
    return document.querySelector('.previewWindow pre').innerText;
  }, function (exportText) {
    var filename = 'workflowy_export.txt';
    console.log('Saving export to ' + filename);
    fs.writeFile(filename, exportText);
  })

  .run(function(err, nightmare){
    console.log('Done.');
  });
