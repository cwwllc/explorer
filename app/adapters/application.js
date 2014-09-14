import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  find: function() {
    throw new Error("find() not implemented.");
  },
  createRecord: function() {
    throw new Error("createRecord() not implemented.");
  },
  updateRecord: function() {
    throw new Error("updateRecord() not implemented.");
  },
  deleteRecord: function() {
    throw new Error("deleteRecord() not implemented.");
  },

  host: 'http://localhost:3000',

  findAll: function() {
    var all = this.ajax(this.get('host') + '/consolidated_screening_list/search?size=10', 'GET');
    return all;
  },
  findQuery: function(store, type, query) {
    var page = (query.page > 1) ? query.page : 1;
    var offset = 10 * (page - 1);
    var results = this.ajax(this.get('host') + '/consolidated_screening_list/search?q='+query.q+'&offset='+offset, 'GET');
    return results;
  },
});
