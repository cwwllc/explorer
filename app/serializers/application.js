import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extractArray: function(store, type, payload) {
    return payload.results.map(function(json) {
      return this.extractSingle(store, type, json);
    }, this);
  },

  extractSingle: function(store, type, payload) {
    var that = this;

    if (!payload.id) {
      payload.id = this.generateId(type, payload);
    }

    if (payload.addresses) {
      payload.addresses = payload.addresses.map(function(a) {
        // TODO find a way to convert model name to Ember type here.
        if (!a.id) {
          a.id = that.generateId('explorer@model:address:', a);
        }
        store.push('address', a);
        return a.id;
      });
    }

    if (payload.ids) {
      payload.ids = payload.ids.map(function(id) {
        if (!id.id) {
          id.id = that.generateId('explorer@model:identification:', id);
        }
        store.push('identification', id);
        return id.id;
      });
    }

    return payload;
  },

  extractMeta: function(store, type, payload) {
    if (payload) {
      store.metaForType(type, {total: payload.total});
    }
  },

  generateId: function(type, payload) {
    var representation = type;
    for (var prop in payload) {
      if (payload.hasOwnProperty(prop) && typeof(payload[prop]) === 'string') {
        representation += payload[prop];
      }
    }
    return md5(representation);
  }
});
