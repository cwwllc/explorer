import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var p = transition.queryParams;
    return this.store.find('trade-event', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      page: p.page
    });
  }
});
