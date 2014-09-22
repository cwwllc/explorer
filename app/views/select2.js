import Ember from 'ember';

export default Ember.Select.extend({
  select2ify: function() {
    $('#'+this.get('elementId')).select2();
  }.observes('selection')
});
