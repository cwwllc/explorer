import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q', 'page'],
  q: null,
  page: null,

  qField: Ember.computed.oneWay('q'),
  pageField: Ember.computed.oneWay('pageField'),

  actions: {
    search: function(page) {
      this.set('q', this.get('qField'));
      if (page) {
        this.set('page', page);
      }
    }
  },

  total: function() {
    var total = this.store.metadataFor(this.get('model.type')).total;
    return total;
  }.property('model'),

  pages: function() {
    var last = Math.max(Math.ceil(this.get('total') / 10), 1);
    var pages = [];
    for (var i = 1; i <= last; i += 1) {
      pages.push(i);
    }
    return pages;
  }.property('model')
});
