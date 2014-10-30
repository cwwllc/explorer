import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'sources', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  sources: null,
  sourcesField: function() {
    var sources = String(this.get('sources')).split(',');
    var selected = this.get('sourceList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('sources'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  sourceList: [
    {value: 'AUSTRALIA', label: 'FTA Australia Tariff Rates'},
    {value: 'COSTA_RICA', label: 'FTA Costa Rica Tariff Rates'},
    {value: 'EL_SALVADOR', label: 'FTA El Salvador Tariff Rates'},
    {value: 'KOREA', label: 'FTA South Korea Tariff Rates'}
  ],
});
