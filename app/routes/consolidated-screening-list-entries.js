import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: {
      // Opt into full transition
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('consolidated-screening-list-entry', {q: params.q, page: params.page});
  }
});
