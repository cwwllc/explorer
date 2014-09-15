import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extractArray: function(store, type, payload, id, requestType) {
    return payload.results.map(function(json) {
      return this.extractSingle(store, type, json);
    }, this);
  },

  extractSingle: function(store, type, payload, id, requestType) {
    payload.id = Date.now() + Math.floor(Math.random() * 10000);
    return payload;
  },

  extractMeta: function(store, type, payload) {
    if (payload) {
      store.metaForType(type, {total: payload.total});
    }
  }
});
