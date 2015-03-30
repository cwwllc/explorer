import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('consolidated-screening-list-entry', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      page: p.page,
      name: p.name,
      address: p.address
    });
  }
});

