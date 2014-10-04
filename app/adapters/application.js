import DS from 'ember-data';
import ENV from 'explorer/config/environment';

export default DS.RESTAdapter.extend({
  host: function() {
    return ENV.webservicesBaseURL;
  }.property(),

  pathForType: function(type) {
    return type.replace('Entry', '').decamelize() + '/search';
  }
});
