import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('tariff-rate', {
      q: p.q,
      sources: p.sources,
      page: p.page
    });
  }
});
