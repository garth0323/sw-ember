import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createBrand: function() {
      var self = this;
      console.log(self.name);
      var brand = this.store.createRecord('brand', {
        name: self.name
      });
      brand.save().then(function() {
        self.transitionToRoute('brand', brand);
      });
    }
  }

});
