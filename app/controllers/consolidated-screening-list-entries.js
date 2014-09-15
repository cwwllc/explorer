import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q', 'countries', 'sources', 'sdnType', 'page'],
  q: null,
  countries: null,
  sources: null,
  sdnType: null,
  page: null,

  qField: Ember.computed.oneWay('q'),
  countriesField: Ember.computed.oneWay('countries'),
  sourcesField: Ember.computed.oneWay('sources'),
  sdnTypeField: Ember.computed.oneWay('sdnType'),
  pageField: Ember.computed.oneWay('pageField'),

  actions: {
    search: function(page) {
      this.set('q', this.get('qField'));
      this.set('countries', this.get('countriesField'));
      this.set('sources', this.get('sourcesField'));
      this.set('sdnType', this.get('sdnTypeField'));
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
