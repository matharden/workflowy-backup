var Nightmare = require('nightmare');
var nightmare = new Nightmare();
var fs = require('fs');

nightmare
  .goto('https://workflowy.com/accounts/login/')

  // login
  .type('#id_username', process.env.USERNAME)
  .type('#id_password', process.env.PASSWORD)
  .click('[type=submit]')
  .wait(5000)

  // open export panel
  .click('#exportAllButton')
  .wait('#id_text')
  .click('#id_text')

  // scrape content
  .evaluate(function () {
    return document.querySelector('.previewWindow pre').innerText;
  })
  .end()
  .then(function (exportText) {
    var filename = 'workflowy_export.txt';
    console.log('Backup saved to ' + filename);
    fs.writeFile(filename, exportText);
  })

  // show any errors if there are any
  .catch(function(err){
    console.log(err);
  });
