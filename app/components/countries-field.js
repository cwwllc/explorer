import Ember from 'ember';

export default Ember.Component.extend({
  countryList: [
    {value: 'us', text: 'United States'},
    {value: 'gb', text: 'United Kingdom'}
  ],

  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      $('#countries').select2();
    });
  }

});
