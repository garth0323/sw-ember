import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    saveChanges: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('brand');
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('brand');
    }

  }


});