import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('consolidated-screening-list-entry', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      offset: this.offset(p.page)
    });
  },

  offset: function(page) {
    if (isNaN(page) || page < 1) {
      page = 1;
    }
    return (10 * (page - 1));
  }
});
