/**
 * Script principal de l'application basée sur l'affichage d'un compteur simple.
 *
 * @author Ulrich VACHON
 */
// Création du conteneur de l'application Ember
App = Ember.Application.create({

   // Initialisation de la valeur par défaut du compteur
   ready: function() {
      App.CompteurController.compteur = App.Compteur.create({
         valeur: 1
      });
      console.log("Compteur initialisé avec la valeur: "  + App.CompteurController.compteur.valeur);
   }
}) ;

// MODELE
// Compteur
App.Compteur = Ember.Object.extend({
   valeur: null
});

// CONTROLEUR
// Compteur
App.CompteurController = Ember.ArrayController.create({
   compteur: null,

   // Décrémente le compteur
   decremente : function() {
      var newValue = parseInt(this.compteur.get("valeur")) - 1;

      this.compteur.set("valeur", newValue);
      console.log("Call decremente method, value="  + newValue);
   },
   // Incrémente le compteur
   incremente : function() {
      var newValue = parseInt(this.compteur.get("valeur"))  + 1;

      this.compteur.set("valeur", newValue);
      console.log("Call incremente method, value="  + newValue);
   }
});
