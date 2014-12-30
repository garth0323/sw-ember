import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brand_id: DS.attr('string'),
  brand: DS.belongsTo('brand', {async: true})
});
