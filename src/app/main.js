/**
 * Script principal de l'application basée sur l'affichage d'un compteur simple.
 *
 * @author Ulrich VACHON
 */

// Création du conteneur de l'application Ember
App = Ember.Application.create();

// MODELE

// Compteur
App.Compteur = Ember.Object.extend({
   valeur: null
});

// CONTROLEUR

// Compteur
App.compteurController = Ember.ObjectController.create({
   content: App.Compteur.create({
      valeur: 1,

      init: function() {
         console.log("Compteur initialisé avec la valeur: "  + this.get('valeur'));
      }
   }),

   // Décrémente le compteur
   decremente : function() {
      this.get('content').decrementProperty('valeur');

      console.log("Call decremente method, value=" + this.get('content.valeur'));
   },

   // Incrémente le compteur
   incremente : function() {
      this.get('content').incrementProperty('valeur');

      console.log("Call incremente method, value=" + this.get('content.valeur'));
   }
});
