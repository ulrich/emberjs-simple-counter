/**
 * Ce test fonctionnel vérifie que les widgets de bases sont biens présents dans la page et que le compteur fonctionne.
 *
 * @author Ulrich VACHON
 */
// Instancie un objet Casper.
var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
});

// URL de l'application de test
var URL = "file:///home/ulrich/projects/emberjs-simple-counter/src/index.html";

casper.start(URL, function() {
   // test the page title
   this.test.assertTitleMatch(/Simple Ember.js Application/, 'Must find the correct title for the Simple application');
   // test if we found the input field
   this.test.assertExists('input[id="compteur_field"]', 'Must find the textfield for the Simple application');
   // test if we found the minus button
   this.test.assertExists('button[id="minus_button"]', 'Must find the minus button for the Simple application');
   // test if we found the plus button
   this.test.assertExists('button[id="plus_button"]', 'Must find the plus button for the Simple application');
});

// first method
result = casper.waitFor(function check() {

     return this.evaluate(function() {
      //this.click('button#plus_button');

      $('#plus_button').click();

      return document.querySelector('input#compteur_field').value;
     });
  }, function then() {
     this.test.assertEquals(result, 2, 'The value must be incremented by 2');
});

// second method
casper.then(function() {
   var result = this.evaluate(function() {
      $('#plus_button').click();

      return $('#compteur_field').val();
   });
   this.test.assertEquals(result,  2, 'The value must be 2');
});

casper.run(function() {
    this.exit();
});
