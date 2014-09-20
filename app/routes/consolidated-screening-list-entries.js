import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    sdnType: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('sources', this.controller.get('sourcesField'));
      this.controller.set('sdnType', this.controller.get('sdnTypeField'));

      this.controller.set('countries', this.controller.get('countriesField').map(function(item) {
        return item.value;
      }));

      this.controller.set('page', (page || 1));
    }
  }
});
