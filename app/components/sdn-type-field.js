import Ember from 'ember';

export default Ember.Component.extend({
  sdnTypeList: [
    {value: null,         text: 'All'},
    {value: 'Entity',     text: 'Entity'},
    {value: 'Individual', text: 'Individual'},
    {value: 'Vessel',     text: 'Vessel'}
  ],

  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      $('#sdn-type').select2();
    });
  }
});
