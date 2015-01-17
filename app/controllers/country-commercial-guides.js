import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'countries', 'industries', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  countries: null,
  countriesField: function() {
    var industries = String(this.get('countries')).split(',');
    var selected = this.get('countryList').filter(function(item) {
      return industries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('countries'),

  industries: null,
  industriesField: function() {
    var industries = String(this.get('industries')).split(',');
    var selected = this.get('sourceList').filter(function(item) {
      return industries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('industries'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  industryList: [
    {value: 'Aviation', label: 'Aviation'},
    {value: 'Safety Security Market', label: 'Safety Security Market'},
    {value: 'Franchising - Resources', label: 'Franchising - Resources'},
    {value: 'Green Building', label: 'Green Building'}
  ],

  countryList: [
    {label: 'China', value: 'CN'},
    {label: 'Colombia', value: 'CO'}
  ]
});
