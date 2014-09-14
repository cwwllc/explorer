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
    if (payload && payload.total) {
      store.metaForType(type, {total: payload.total});
    }
  }

  //normalize: function(type, hash) {
    ////Returns: Object
  //},

  //normalizePayload: function(payload) {
    //delete payload.total;
    //delete payload.offset;
    //return payload.results;
  //}
});
