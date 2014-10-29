import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    }
  },

  searchHeader: function() {
    var doc = this.get('document');
    // TODO this needs to be a property of the document (i.e. of the model).
    return (doc.get('name') || doc.get('event_name') || doc.get('question'));
  }.property('document')
});
