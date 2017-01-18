var Nightmare = require('nightmare');
var nightmare = new Nightmare(
  {show:true});
var fs = require('fs');

nightmare
  .goto('https://workflowy.com/accounts/login/')

  // login
  .type('#id_username', 'matharden@gmail.com')
  .type('#id_password', 'lego18lists')
  .click('[type=submit]')
  .wait(5000)

  // open export panel
  .click('#exportAllButton')
  .wait(500)
  .click('#id_text')
  .wait(500)

  // scrape content
  .evaluate(function(){
    return document.querySelector('.previewWindow pre').innerText;
  })
  .end()
  .then(function (exportText) {
    var filename = 'workflowy_export.txt';
    console.log('Saving export to ' + filename);
    fs.writeFile(filename, exportText);
  })

  .catch(function(err){
    console.log(err ? err : 'Done.');
  });
