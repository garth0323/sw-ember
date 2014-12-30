import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('brands', function() {
    this.route('new');
    this.resource('brand', { path: '/:brand_id' }, function() {
      this.route('edit');
    });
  });

  // this.resource('campaigns', function() {
  //   this.resource('campaign', { path: '/:campaign_id' });
  //   // this.route('index'), { path: 'brands/:brand_id' });
  // });
  // this.route('brand/edit');
  this.route('brand/new');
});

export default Router;
