import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    }
  },

  searchHeader: function() {
    var doc = this.get('document');
    return (doc.get('name') || doc.get('event_name'));
  }.property('document')
});
