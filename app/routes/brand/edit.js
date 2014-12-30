import Ember from 'ember';

export default Ember.Route.extend({

  activate:   function() { this.controllerFor('brand').set('isEditing', true); },
  deactivate: function() { this.controllerFor('brand').set('isEditing', false); }

});
