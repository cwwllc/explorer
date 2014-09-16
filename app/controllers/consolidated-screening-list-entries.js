import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q', 'countries', 'sources', 'sdnType', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  // The mapping between the countries-field component and the controller is
  // more complex than that of the other params, due to the select box's value
  // and option text being different. Both "countries" and "countriesField"
  // are bound to the component. "countries" gives the component the query
  // string value, for setting selected options initally, and "countriesField"
  // gives the selected option back to the controller, as an array of Objects
  // rather than as a comma-separated string of values.
  //
  // This seems more complex than it should be, which suggests there may be a
  // better way.
  countries: null,
  countriesField: null,

  sources: null,
  sourcesField: Ember.computed.oneWay('sources'),

  sdnType: null,
  sdnTypeField: Ember.computed.oneWay('sdnType'),

  page: null,
  pageField: Ember.computed.oneWay('pageField'),

  actions: {
    search: function(page) {
      this.set('q', this.get('qField'));
      this.set('sources', this.get('sourcesField'));
      this.set('sdnType', this.get('sdnTypeField'));

      this.set('countries', this.get('countriesField').map(function(item) {
        return item.value;
      }));

      this.set('page', (page || 1));
    }
  },

  total: function() {
    var total = this.store.metadataFor(this.get('model.type')).total;
    return total;
  }.property('model'),

  lastPage: function() {
    return Math.max(Math.ceil(this.get('total') / 10), 1);
  }.property('total'),

  pagesInfo: function() {
    var page = parseInt(this.get('page')),
      lastPage = this.get('lastPage'),
      rangeStart = Math.max(1, (page - 5)),
      rangeEnd = Math.min(lastPage, (page + 5)),
      pages = [];


    if (lastPage > 1) {
      if (rangeStart > 1) {
        pages.push({page: 1, isCurrent: (page === 1), text: 'First'});
      }
      for (var i = rangeStart; i <= rangeEnd; i += 1) {
        pages.push({page: i, isCurrent: (i === page), text: i});
      }
      if (rangeEnd < lastPage) {
        pages.push({page: lastPage, isCurrent: (page === lastPage), text: 'Last'});
      }
    }

    return pages;
  }.property('total')
});
