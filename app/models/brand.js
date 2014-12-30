import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  facebook_page_id: DS.attr('string'),
  active: DS.attr('boolean'),
  facebook_uid: DS.attr('string'),
  facebook_token: DS.attr('string'),
  facebook_token_expires: DS.attr('string'),
  website_url: DS.attr('string'),
  privacy_policy_link: DS.attr('string'),
  terms_link: DS.attr('string'),
  instagram_account: DS.attr('string'),
  instagram_url: DS.attr('string'),
  twitter_account: DS.attr('string'),
  twitter_url: DS.attr('string'),
  avatar_url: DS.attr('string'),
  youtube_account: DS.attr('string'),
  youtube_url: DS.attr('string'),
  favicon_url: DS.attr('string'),
  open_graph_url: DS.attr('string'),
  campaigns: DS.hasMany('campaign', {async: true})
});
