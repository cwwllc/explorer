import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extractArray: function(store, type, payload) {
    return payload.results.map(function(json) {
      return this.extractSingle(store, type, json);
    }, this);
  },

  extractSingle: function(store, type, payload) {
    payload.id = payload.source + payload.name + payload.federal_register_notice + payload.start_date + payload.end_date;

    var arrayFields = ['alt_names', 'nationalities', 'citizenships', 'dates_of_birth', 'places_of_birth'];
    arrayFields.forEach(function(field) {
      if (payload[field]) {
        payload[field] = payload[field].join(', ');
      }
    });

    if (payload.addresses) {
      payload.addresses = payload.addresses.map(function(a) {
        a.id = a.address + a.city + a.state + a.postal_code + a.country;
        store.push('address', a);
        return a.id;
      });
    }

    if (payload.ids) {
      payload.ids = payload.ids.map(function(id) {
        id.id = id.type + id.number + id.country + id.issue_date + id.expiration_date;
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
  }
});
