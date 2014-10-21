import Ember from 'ember';

export default Ember.Select.extend({
  didInsertElement: function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('#'+this.get('elementId')).select2();
    });
  }
});
