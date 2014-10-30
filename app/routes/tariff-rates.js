import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var sources,
        sourcesField = this.controller.get('sourcesField');

      if (sourcesField) {
        sources = sourcesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('sources', sources);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
