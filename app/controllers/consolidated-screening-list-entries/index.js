import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'consolidated-screening-list-entries',

  page: Ember.computed.alias('controllers.consolidated-screening-list-entries.page'),

  total: function() {
    var total = this.store.metadataFor(this.get('model.type')).total;
    return total;
  }.property('model'),

  lastPage: function() {
    return Math.max(Math.ceil(this.get('total') / 10), 1);
  }.property('total'),

  prevPage: function() {
    var page = this.get('page');
    return ((page === 1) ? null : (page - 1));
  }.property('total'),

  nextPage: function() {
    var page = this.get('page'),
      lastPage = this.get('lastPage');
    return ((page === lastPage) ? null : (page + 1));
  }.property('total'),

  pagesInfo: function() {
    var page = parseInt(this.get('page')),
      lastPage = this.get('lastPage'),
      rangeStart = Math.max(1, (page - 4)),
      rangeEnd = Math.min(lastPage, (rangeStart + 9)),
      pages = [];

    if (lastPage > 1) {
      for (var i = rangeStart; i <= rangeEnd; i += 1) {
        pages.push({page: i, isCurrent: (i === page), text: i});
      }
    }

    return pages;
  }.property('total')
});
