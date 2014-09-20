import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q', 'countries', 'sources', 'sdnType', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  // The mapping between the countries-field component and the controller is
  // more complex than that of the other params, due to the select box's value
  // and option text being different. Both "countries" and "countriesField"
  // are bound to the component. "countries" gives the component the query
  // string value, for setting selected options initally, and "countriesField"
  // gives the selected option back to the controller, as an array of Objects
  // rather than as a comma-separated string of values.
  //
  // This seems more complex than it should be, which suggests there may be a
  // better way.
  countries: null,
  countriesField: null,

  sources: null,
  sourcesField: Ember.computed.oneWay('sources'),

  sdnType: null,
  sdnTypeField: Ember.computed.oneWay('sdnType'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField')
});
