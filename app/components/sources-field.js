import Ember from 'ember';

export default Ember.Component.extend({
  sourceList: ['SDN', 'FSE', 'EL', 'ISN', 'UVL', 'DPL', 'DTC'],

  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      $('#sources').select2();
    });
  }
});
