import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    sdnType: { refreshModel: true },
    page: { refreshModel: true }
  },

  model: function(params) {
    return this.store.find('consolidated-screening-list-entry', {
      q: params.q,
      countries: params.countries,
      sources: params.sources,
      sdn_type: params.sdnType,
      page: params.page
    });
  }
});
