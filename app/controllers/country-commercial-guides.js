import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'countries', 'sources', 'industries', 'topics', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  countries: null,
  countriesField: function() {
    var sources = String(this.get('countries')).split(',');
    var selected = this.get('countryList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('countries'),

  sources: null,
  sourcesField: function() {
    var sources = String(this.get('sources')).split(',');
    var selected = this.get('sourceList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('sources'),

    industries: null,
  industriesField: function() {
    var industries = String(this.get('industries')).split(',');
    var selected = this.get('industryList').filter(function(item) {
      return industries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('industries'),

      topics: null,
  topicsField: function() {
    var topics = String(this.get('topics')).split(',');
    var selected = this.get('topicList').filter(function(item) {
      return topics.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('topics'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  sourceList: [
    {value: 'DL', label: 'Department of State Direct Line'},
    {value: 'EXIM', label: 'Export-Import Bank'},
    {value: 'ITA', label: 'International Trade Administration'},
    {value: 'SBA', label: 'Small Business Administration'},
    {value: 'USTDA', label: 'U.S. Trade and Development Agency'}
  ],

    industryList: [
    {value: 'Aviation', label: 'Aviation'},
    {value: 'Railway and Metro', label: 'Railway and Metro'},
    {value: 'Medical Device and Healthcare Service', label: 'Medical Device and Healthcare Service'},
    {value: 'Marine Industries', label: 'Marine Industries'},
    {value: 'Travel and Tourism', label: 'Travel and Tourism'},
    {value: 'Franchising', label: 'Franchising'},
    {value: 'Air Pollution Control Equipment', label: 'Air Pollution Control Equipment'}
  ],

    topicList: [
    {value: 'Using an Agent or Distributor', label: 'Using an Agent or Distributor'},
    {value: 'Local Professional Services', label: 'Local Professional Services'},
    {value: 'Aviation - Overview', label: 'Aviation - Overview'},
    {value: 'Avation - Opportunities', label: 'Avation - Opportunities'},
    {value: 'Safety Security Market - Sub-Sector Best Prospects', label: 'Safety Security Market - Sub-Sector Best Prospects'},
    {value: 'Franchising - Resources', label: 'Franchising - Resources'},
    {value: 'Green Building - Web Resources', label: 'Green Building - Web Resources'}
  ],

  countryList: [
    {label: 'China', value: 'CN'},
    {label: 'Colombia', value: 'CO'},
  ]
});
