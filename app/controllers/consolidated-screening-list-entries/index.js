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
